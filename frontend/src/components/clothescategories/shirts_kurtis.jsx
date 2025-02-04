
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpPopup from "/src/OtpPopup.jsx"; // Import the OTP Popup component
import "./shirts_kurtis.css";

const ShirtsKurtis = ({ addToCart }) => {
  const [addedToCartMessage, setAddedToCartMessage] = useState('');
  const [isOtpPopupVisible, setOtpPopupVisible] = useState(false); 
  
  const kurtiData = [
    {
      id: 1,
      images: [
        "src/assets/shirts_kurtisimg/img1.webp",
        "src/assets/shirts_kurtisimg/img2.webp",
        "src/assets/shirts_kurtisimg/img3.webp",
        "src/assets/shirts_kurtisimg/img4.webp",
      ],
      name: "Indigo Handblock Shirt Kurti",
      currentPrice: 1799,
      originalPrice: 1999,
      discount: "10%",
    },
    {
      id: 2,
      images: [
        "src/assets/shirts_kurtisimg/img5.webp",
        "src/assets/shirts_kurtisimg/img6.webp",
        "src/assets/shirts_kurtisimg/img7.webp",
        "src/assets/shirts_kurtisimg/img8.webp",
      ],
      name: "Floral Print Cotton Kurti",
      currentPrice: 1599,
      originalPrice: 1799,
      discount: "11%",
    },
    {
      id: 3,
      images: [
        "src/assets/shirts_kurtisimg/img9.webp",
        "src/assets/shirts_kurtisimg/img10.webp",
        "src/assets/shirts_kurtisimg/img11.webp",
        "src/assets/shirts_kurtisimg/img12.webp",
      ],
      name: "Chic Anarkali Kurti",
      currentPrice: 2199,
      originalPrice: 2499,
      discount: "12%",
    },
    {
      id: 4,
      images: [
        "src/assets/shirts_kurtisimg/img13.webp",
        "src/assets/shirts_kurtisimg/img14.webp",
        "src/assets/shirts_kurtisimg/img15.webp",
        "src/assets/shirts_kurtisimg/img16.webp",
      ],
      name: "Embroidered Straight Kurti",
      currentPrice: 1999,
      originalPrice: 2299,
      discount: "13%",
    },
    {
      id: 5,
      images: [
        "src/assets/shirts_kurtisimg/img17.webp",
        "src/assets/shirts_kurtisimg/img18.webp",
        "src/assets/shirts_kurtisimg/img19.webp",
        "src/assets/shirts_kurtisimg/img20.webp",
      ],
      name: "Traditional Silk Kurti",
      currentPrice: 2499,
      originalPrice: 2799,
      discount: "10%",
    },
    {
      id: 6,
      images: [
        "src/assets/shirts_kurtisimg/img21.webp",
        "src/assets/shirts_kurtisimg/img22.webp",
        "src/assets/shirts_kurtisimg/img23.webp",
        "src/assets/shirts_kurtisimg/img24.webp",
      ],
      name: "Casual Denim Kurti",
      currentPrice: 1599,
      originalPrice: 1799,
      discount: "11%",
    },
    {
      id: 7,
      images: [
        "src/assets/shirts_kurtisimg/img25.webp",
        "src/assets/shirts_kurtisimg/img26.webp",
        "src/assets/shirts_kurtisimg/img27.webp",
        "src/assets/shirts_kurtisimg/img28.webp",
      ],
      name: "Party Wear Long Kurti",
      currentPrice: 2999,
      originalPrice: 3299,
      discount: "9%",
    },
    {
      id: 8,
      images: [
        "src/assets/shirts_kurtisimg/img29.webp",
        "src/assets/shirts_kurtisimg/img30.webp",
        "src/assets/shirts_kurtisimg/img31.webp",
        "src/assets/shirts_kurtisimg/img32.webp",
      ],
      name: "Elegant Black Kurti",
      currentPrice: 2199,
      originalPrice: 2399,
      discount: "8%",
    },
  ];

  const handleAddToCart = (kurti) => {
    addToCart(kurti);
    setAddedToCartMessage(`${kurti.name} has been added to your cart!`);
    setTimeout(() => {
      setAddedToCartMessage('');
    }, 3000); // Message will disappear after 3 seconds
  };

  const handleWishlistClick = () => {
    setOtpPopupVisible(true); // Show OTP Popup on wishlist click
  };

  const closeOtpPopup = () => {
    setOtpPopupVisible(false); // Close OTP Popup
  };

  return (
    <>
      <h2 className="kurti-heading">Shirts & Kurtis</h2>
      {addedToCartMessage && (
        <div className="added-to-cart-message">{addedToCartMessage}</div>
      )}
      <div className="shirt-kurti-container">
        <div className="kurti-grid">
          {kurtiData.map((kurti) => (
            <KurtiCard 
              key={kurti.id} 
              {...kurti} 
              addToCart={handleAddToCart} 
              onWishlistClick={handleWishlistClick} // Pass wishlist click handler to KurtiCard
            />
          ))}
        </div>
        <button className="view-all-btn">
          <Link to="/shirts-kurtis-all">View All</Link>
        </button>
      </div>

      {isOtpPopupVisible && <OtpPopup onClose={closeOtpPopup} />} {/* Conditionally render OTP Popup */}
    </>
  );
};
const KurtiCard = ({ id, images, name, currentPrice, originalPrice, discount, addToCart, onWishlistClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoverActive, setHoverActive] = useState(false);

  // Remove the wishlist state to prevent icon from toggling
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    onWishlistClick(); // Trigger OTP Popup when wishlist icon is clicked
  };

  return (
    <div className="kurti-card">
      <div
        className="image-wrapper"
        onMouseEnter={() => setHoverActive(true)}
        onMouseLeave={() => {
          setHoverActive(false);
          setCurrentImageIndex(0);
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt={name}
          className="kurti-image"
        />
        <div
          className="wishlist-icon" // Don't add dynamic class for active state
          onClick={handleWishlistClick} // Trigger OTP popup on click
        >
          <span>&#10084;</span>
        </div>
      </div>
      <div className="kurti-name">
        <div className="marquee">
          <span>{name}</span>
        </div>
      </div>
      <div className="kurti-price">
        <span className="current-price">₹{currentPrice}</span>
        <span className="original-price">₹{originalPrice}</span>
        <span className="discount">({discount} OFF)</span>
      </div>
      <button className="add-to-cart-btn" onClick={() => addToCart({ id, images, name, currentPrice, originalPrice, discount })}>
        Add to cart
      </button>
    </div>
  );
};


export default ShirtsKurtis;
