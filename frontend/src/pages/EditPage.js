import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import useProductStore from '../store/product';

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const updatedProduct = useProductStore(state => state.updatedProduct);

    // Zustand store access
    const editname = useProductStore((state) => state.editname);
    const editPrice = useProductStore((state) => state.editPrice);
    const editImage = useProductStore((state) => state.editImage);

    const setEditName = useProductStore((state) => state.setEditName);
    const setEditPrice = useProductStore((state) => state.setEditPrice);
    const setEditImage = useProductStore((state) => state.setEditImage);
    const editPost = useProductStore((state) => state.editPost);
    const getPostById = useProductStore((state) => state.getPostById);

    const post = getPostById(id);

    useEffect(() => {
        if (post && post._id) {
            setEditName(post.name);
            setEditPrice(post.price);
            setEditImage(post.image);
        }
    }, [post, setEditName, setEditPrice, setEditImage]);

    const handleEdit = (e) => {
        e.preventDefault();
        if (!post) {
            console.error("No product found for editing!");
            return;
        }
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id: post._id, name: editname, price: editPrice, image: editImage, datetime };

        editPost(updatedPost);
        navigate('/');
    };

    const handleUpdateProduct = () => {
        updatedProduct(post._id, {
            name: editname,
            price: editPrice,
            image: editImage
        });
        navigate('/');
    };

    return (
        <div
            style={{
                minHeight: '89vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)'
            }}
        >
            <div style={{
                background: '#fff',
                padding: '2.5rem 2rem',
                borderRadius: '1.25rem',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                minWidth: '350px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#2d3748' }}>Edit Product</h2>
                <form onSubmit={handleEdit}>
                    <div style={{ marginBottom: '18px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', color: '#4a5568' }}>Name</label>
                        <input
                            type="text"
                            value={editname}
                            onChange={e => setEditName(e.target.value)}
                            placeholder="Enter product name"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1',
                                fontSize: '16px'
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '18px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', color: '#4a5568' }}>Price</label>
                        <input
                            type="number"
                            value={editPrice}
                            onChange={e => setEditPrice(e.target.value)}
                            placeholder="Enter price"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1',
                                fontSize: '16px'
                            }}
                            required
                            min="0"
                            step="0.01"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', color: '#4a5568' }}>Image URL</label>
                        <input
                            type="text"
                            value={editImage}
                            onChange={e => setEditImage(e.target.value)}
                            placeholder="Enter image URL"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1',
                                fontSize: '16px'
                            }}
                            required
                        />
                    </div>
                    <button
                        type="button"
                        style={{
                            width: '40%',
                            padding: '12px',
                            background: 'linear-gradient(90deg, #667eea 0%, #5a67d8 100%)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onClick={() => handleUpdateProduct()}
                    >
                        Update
                    </button>
                    <Link to={"/"}>
                        <button
                            type="button"
                            style={{
                                width: '40%',
                                padding: '12px',
                                background: 'linear-gradient(90deg, #667eea 0%, #5a67d8 100%)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background 0.2s',
                                marginLeft: "20%"
                            }}
                        >
                            Cancel
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default EditPage;