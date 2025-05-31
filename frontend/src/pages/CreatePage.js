import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/product';

const CreatePage = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });
  const { createProduct } = useProductStore();

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // const { success, message } = await createProduct(newProduct);
    const result = await createProduct(newProduct);
    console.log(result);
    setNewProduct({ name: "", price: "", image: "" });
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '89vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)'
    }}>
      <div style={{
        background: '#fff',
        padding: '2.5rem 2rem',
        borderRadius: '1.25rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        minWidth: '350px'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#4f46e5',
          fontWeight: 700,
          fontSize: '2rem',
          letterSpacing: '1px'
        }}>
          Create a Product
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <input
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #c7d2fe',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border 0.2s',
            }}
            type="text"
            name="name"
            placeholder="Name"
            value={newProduct.name}
            onChange={handleChange}
          />
          <input
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #c7d2fe',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border 0.2s',
            }}
            type="text"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <input
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #c7d2fe',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border 0.2s',
            }}
            type="text"
            name="image"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleChange}
          />
          <button
            style={{
              background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
              color: '#fff',
              padding: '0.75rem 1rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(99, 102, 241, 0.15)',
              transition: 'background 0.2s'
            }}
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;