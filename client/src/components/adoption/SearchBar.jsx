import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
  return (
    <div className="search-bar">
      <select className="location-dropdown">
        <option value="">Select Location</option>
        <option value="ny">New York</option>
        <option value="la">Los Angeles</option>
        <option value="chicago">Chicago</option>
      </select>
      <input
        type="text"
        className="search-input"
        placeholder="What are you looking for..."
      />
      <button className="search-button">
        Search <span className="icon">🔍</span>
      </button>
    </div>
  );
};

export default SearchBar;
