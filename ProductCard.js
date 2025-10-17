import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { title, price, discount, image, rating } = product;
  const discountedPrice = Math.round(price * (1 - discount / 100));

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
        {discount > 0 && <div className="discount-badge">-{discount}%</div>}
      </div>
      <div className="product-info">
        <div className="title">{title}</div>
        <div className="price">
          <span className="discounted-price">UGX {discountedPrice.toLocaleString()}</span>
          {discount > 0 && <span className="original-price">UGX {price.toLocaleString()}</span>}
        </div>
        <div className="rating">⭐ {rating.toFixed(1)}</div>
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
