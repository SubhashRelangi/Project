import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProductStore from '../store/product';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products:", products);

  return (
    <div className='Home' style={{
      minHeight: '89vh',
      Width: "100%",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)'
    }}>
      <div className='VStack' style={{
        display: 'block',
      }}>
        <h1 style={{
          textAlign: "center",
          color: "white"
        }}>Current Products</h1>

        <div
          style={{
            display: 'grid',
            gap: '70px',
          }}
          className="product-grid"
        >
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No Products found <Link to={"/create"}>Create a product</Link></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;