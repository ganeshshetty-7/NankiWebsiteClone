import React, { useState } from 'react';
import './ShirtKurtisAll.css';

const ShirtKurtisAll = ({ addToCart }) => {
  const [sizeFilters, setSizeFilters] = useState({});
  const [priceFilters, setPriceFilters] = useState({});
  const [sortOption, setSortOption] = useState('name');
  const [addedToCartMessage, setAddedToCartMessage] = useState('');

  const shirtsData = [
    {
      id: 1,
      images: ["src/assets/shirts_kurtisimg/img1.webp"],
      name: "Indigo Handblock Shirt Kurti",
      currentPrice: 1799,
      originalPrice: 1999,
      discount: "10%",
      sizes: [12, 14] // Example sizes
    },
    {
      id: 2,
      images: ["src/assets/shirts_kurtisimg/img5.webp"],
      name: "Black Square Handblock Shirt Kurti",
      currentPrice: 1799,
      originalPrice: 1999,
      discount: "10%",
    },
    {
      id: 3,
      images: ["src/assets/shirts_kurtisimg/img9.webp"],
      name: "Mango Leaf Bagru Handblock Kurti",
      currentPrice: 1699,
      originalPrice: 1999,
      discount: "15%",
    },
    {
      id: 4,
      images: ["src/assets/shirts_kurtisimg/img13.webp"],
      name: "Laal Ajrakh Natural Dye Shirt Kurti",
      currentPrice: 2300,
      originalPrice: 2510,
      discount: "8%",
    },
    {
      id: 5,
      images: ["src/assets/shirts_kurtisimg/img17.webp"],
      name: "Green Ajrakh Handblock Kurti",
      currentPrice: 2100,
      originalPrice: 2300,
      discount: "9%",
    },
    {
      id: 6,
      images: ["src/assets/shirts_kurtisimg/img21.webp"],
      name: "Yellow Ajrakh Handblock Kurti",
      currentPrice: 2150,
      originalPrice: 2350,
      discount: "8%",
    },
    {
      id: 7,
      images: ["src/assets/shirts_kurtisimg/img25.webp"],
      name: "Pink Ajrakh Handblock Kurti",
      currentPrice: 2200,
      originalPrice: 2400,
      discount: "8%",
    },
    {
      id: 8,
      images: ["src/assets/shirts_kurtisimg/img29.webp"],
      name: "Blue Ajrakh Handblock Kurti",
      currentPrice: 2000,
      originalPrice: 2200,
      discount: "10%",
    },
    {
      id: 9,
      images: ["src/assets/shirts_kurtisimg/img21.webp"],
      name: "Ajrakh Handblock Kurti",
      currentPrice: 2150,
      originalPrice: 2350,
      discount: "8%",
    },
    {
      id: 10,
      images: ["src/assets/shirts_kurtisimg/img25.webp"],
      name: "Pink Ajrakh Handblock Kurti",
      currentPrice: 2200,
      originalPrice: 2400,
      discount: "8%",
    },
    {
      id: 11,
      images: ["src/assets/shirts_kurtisimg/img29.webp"],
      name: "Blue Ajrakh Handblock Kurti",
      currentPrice: 2000,
      originalPrice: 2200,
      discount: "10%",
    },
  ];

  const priceRanges = [
    { range: [1590, 1770], label: '₹1,590 - ₹1,770' },
    { range: [1770, 1950], label: '₹1,770 - ₹1,950' },
    { range: [1950, 2130], label: '₹1,950 - ₹2,130' },
    { range: [2130, 2310], label: '₹2,130 - ₹2,310' },
    { range: [2310, 2490], label: '₹2,310 - ₹2,490' },
  ];

  const handleSizeChange = (size) => {
    setSizeFilters((prev) => ({ ...prev, [size]: !prev[size] }));
  };

  const handlePriceChange = (priceRange) => {
    setPriceFilters((prev) => ({
      ...prev,
      [priceRange.label]: !prev[priceRange.label],
    }));
  };

  const clearFilters = () => {
    setSizeFilters({});
    setPriceFilters({});
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleAddToCart = (shirt) => {
    addToCart(shirt);
    setAddedToCartMessage(`${shirt.name} has been added to your cart!`);
    setTimeout(() => {
      setAddedToCartMessage('');
    }, 3000);
  };

  const filteredShirts = shirtsData.filter((shirt) => {
    const sizeIncluded =
      Object.keys(sizeFilters).length === 0 || shirt.sizes.some(size => sizeFilters[size]);

    const priceIncluded =
      Object.keys(priceFilters).length === 0 ||
      priceRanges.some((priceRange) =>
        priceFilters[priceRange.label] &&
        shirt.currentPrice >= priceRange.range[0] &&
        shirt.currentPrice <= priceRange.range[1]
      );

    return sizeIncluded && priceIncluded;
  });

  const sortedShirts = [...filteredShirts].sort((a, b) => {
    if (sortOption === 'priceAsc') return a.currentPrice - b.currentPrice;
    if (sortOption === 'priceDesc') return b.currentPrice - a.currentPrice;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="shirt-kurtis-page">
      <h1>Shirt Kurti ({sortedShirts.length} available)</h1>
      {addedToCartMessage && (
        <div className="added-to-cart-message">{addedToCartMessage}</div>
      )}
      <div className="filters">
        <h3>Filters</h3>
        <div>
          <h4>Size</h4>
          <ul>
            {[12, 14, 16, 18].map((size) => (
              <li key={size}>
                <input
                  type="checkbox"
                  id={`size${size}`}
                  checked={sizeFilters[size] || false}
                  onChange={() => handleSizeChange(size)}
                /> {size}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Price</h4>
          <ul>
            {priceRanges.map((price, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`price${index + 1}`}
                  checked={priceFilters[price.label] || false}
                  onChange={() => handlePriceChange(price)}
                /> {price.label}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={clearFilters} className="clear-filters">Clear All Filters</button>
        <div className="sort-container">
          <label htmlFor="sort">Sort By: </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="name">Name (A-Z)</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
          </select>
        </div>
      </div>
      <div className="shirts-grid">
        {sortedShirts.map((shirt) => (
          <div key={shirt.id} className="shirt-card">
            <img src={shirt.images[0]} alt={shirt.name} className="shirt-image" />
            <h3>{shirt.name}</h3>
            <p className="price">
              ₹{shirt.currentPrice}{' '}
              <span className="original-price">₹{shirt.originalPrice}</span>
              <span className="discount">{shirt.discount}</span>
            </p>
            <button className="add-to-cart" onClick={() => handleAddToCart(shirt)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShirtKurtisAll;
