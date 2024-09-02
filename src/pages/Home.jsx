import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  const handleSearch = (query) => {
    if (query.length > 3) {
      const filteredData = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products); 
    }
  };

  return (
    <>
     
      <Navbar onSearch={handleSearch} />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
