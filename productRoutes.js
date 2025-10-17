const express = require('express');
const multer = require('multer');
const Product = require('../models/Product');
const { verifyToken, verifyRole } = require('../middleware/authMiddleware');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Create product (Vendor/Admin only)
router.post('/', verifyToken, verifyRole(['vendor', 'admin']), upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, category, price, inventory } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];

    const product = new Product({
      vendorId: req.user.id,
      name,
      description,
      category,
      price: parseFloat(price),
      inventory: parseInt(inventory),
      images
    });

    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});

// Get all products (Public)
router.get('/', async (req, res) => {
  try {
    const { category, minPrice, maxPrice, search } = req.query;
    let query = {};

    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Product.find(query).populate('vendorId', 'username email');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// Get single product (Public)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('vendorId', 'username email');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
});

// Update product (Vendor/Admin only - vendors can only update their own products)
router.put('/:id', verifyToken, verifyRole(['vendor', 'admin']), upload.array('images', 5), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if vendor owns the product or if user is admin
    if (req.user.role !== 'admin' && product.vendorId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this product' });
    }

    const { name, description, category, price, inventory } = req.body;
    const images = req.files ? req.files.map(file => file.path) : product.images;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: name || product.name,
        description: description || product.description,
        category: category || product.category,
        price: price ? parseFloat(price) : product.price,
        inventory: inventory ? parseInt(inventory) : product.inventory,
        images
      },
      { new: true }
    );

    res.json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
});

// Delete product (Vendor/Admin only - vendors can only delete their own products)
router.delete('/:id', verifyToken, verifyRole(['vendor', 'admin']), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if vendor owns the product or if user is admin
    if (req.user.role !== 'admin' && product.vendorId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this product' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
});

module.exports = router;
