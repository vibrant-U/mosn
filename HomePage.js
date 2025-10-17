import React from 'react';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const bannerImage = 'https://via.placeholder.com/900x300?text=OctoberFest+Banner';

const sampleProducts = [
  { id: 1, title: 'Hisense 32 Inch HD LED TV', price: 297000, discount: 46, image: 'https://via.placeholder.com/150', rating: 4.2 },
  { id: 2, title: '130L Deep Freezer', price: 459000, discount: 43, image: 'https://via.placeholder.com/150', rating: 4.0 },
  { id: 3, title: 'Hisense 43 Inch FHD LED TV', price: 655000, discount: 45, image: 'https://via.placeholder.com/150', rating: 4.3 },
  { id: 4, title: 'Hisense 50 Inch LED 4K UHD', price: 1055000, discount: 30, image: 'https://via.placeholder.com/150', rating: 4.5 },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <img src={bannerImage} alt="OctoberFest Banner" className="banner" />
      <section className="deals-section">
        <h2>Crazy OctoberFest Deals</h2>
        <button className="shop-now-btn">Shop Now</button>
      </section>
      <section className="product-list">
        <h3>OctoberFest Top Deals</h3>
        <div className="products-grid">
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
