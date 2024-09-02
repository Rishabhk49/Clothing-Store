import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">E-Commerce</div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          
          
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
