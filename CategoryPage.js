import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Category Page</h2>
      <p>Showing products for category ID: {categoryId}</p>
    </div>
  );
};

export default CategoryPage;
