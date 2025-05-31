import React from 'react';
import useProductStore from '../store/product';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { deleteProduct } = useProductStore();
    const handleDeleteProduct = async (id) => {
        const { result } = await deleteProduct(id);
        if (!result) {
            console.log("Product created successfully!");
        } else {
            console.log(result?.message || "Failed to create product.");
        }
    }

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: 'auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            margin: '16px',
            textAlign: 'center',
            background: '#fff'
        }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3 style={{ margin: '12px 0 8px 0', fontSize: '1.2rem' }}>{product.name}</h3>
            <p style={{ color: '#2e7d32', fontWeight: 'bold', marginBottom: '16px' }}>${product.price}</p>
            <div>
                <Link to={`/edit/${product._id}`}>
                    <button
                        style={{
                            padding: '8px 16px',
                            marginRight: '8px',
                            background: '#1976d2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Edit
                    </button>
                </Link>
                <button
                    style={{
                        padding: '8px 16px',
                        background: '#d32f2f',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleDeleteProduct(product._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};


export default ProductCard;