import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 3) {
      onSearch(query); 
    } else {
      onSearch(''); 
    }
  }, [query, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value); 
  };

  return (
    <div className="relative flex items-center">
    <input
      type="text"
      placeholder="Search..."
      className="p-2 pl-10 border border-gray-300 rounded-full"
      style={{ width: '200px' }}
      value={query}
      onChange={handleInputChange}
    />
    <FaSearch className="absolute left-3 inset-y-0 my-auto text-gray-500" />
  </div>
  );
};

export default SearchBar;
