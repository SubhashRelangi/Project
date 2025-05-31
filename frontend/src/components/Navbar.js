import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header style={{
      background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <h1 style={{
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: '2px',
        margin: 0,
        fontSize: '2rem'
      }}>
        Product Store
      </h1>
      <Link to={"/create"}>
        <button style={{
          background: 'rgba(255,255,255,0.9)',
          color: '#4e54c8',
          border: 'none',
          borderRadius: "10px",
          padding: '0.6rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(78,84,200,0.15)',
          transition: 'background 0.2s, color 0.2s'
        }}
        >
          +
        </button>
      </Link>
    </header>
  )
}

export default Navbar