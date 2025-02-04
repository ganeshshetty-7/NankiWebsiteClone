import React, { useState } from "react";
import allProducts from "./Products"; // Importing allProducts data
import TopCategories from "./components/topcategories";
import "./SearchPage.css";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");


  // Handle input change for search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle input focus
  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  // Filter the products based on the search query
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-page">
   
      

      <h2>Search Products Here !...</h2>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleFocus}  // Trigger onFocus when input is clicked
        onBlur={handleBlur}    // Trigger onBlur when input loses focus
        className="search-input"
      />
      {!searchQuery && <TopCategories />}
      <div className="search-results">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="search-item">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>₹{product.currentPrice}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchPage;
