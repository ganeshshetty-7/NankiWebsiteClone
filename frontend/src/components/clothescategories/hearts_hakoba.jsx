import React, { useState, useEffect } from "react";
import "./hearts_hakoba.css";
import OtpPopup from "/src/OtpPopup"; // Import OTP Popup

const Hearts_hakoba = ({ addToCart }) => {
  const [addedToCartMessage, setAddedToCartMessage] = useState('');
  const [isOtpPopupVisible, setOtpPopupVisible] = useState(false); // State for OTP popup visibility

  const kurtiData = [
    {
      id: 1,
      images: [
        "src/assets/hearts_hakobaimg/img1.webp",
        "src/assets/hearts_hakobaimg/img2.webp",
        "src/assets/hearts_hakobaimg/img3.webp",
        "src/assets/hearts_hakobaimg/img4.webp",
      ],
      name: "Indigo Handblock Shirt Kurti",
      currentPrice: 1799,
      originalPrice: 1999,
      discount: "10%",
    },
    {
      id: 2,
      images: [
       
        "src/assets/hearts_hakobaimg/img6.webp",
        "src/assets/hearts_hakobaimg/img7.webp",
        "src/assets/hearts_hakobaimg/img8.webp",
      ],
      name: "Floral Print Cotton Kurti",
      currentPrice: 1599,
      originalPrice: 1799,
      discount: "11%",
    },
    {
      id: 3,
      images: [
        "src/assets/hearts_hakobaimg/img9.webp",
        "src/assets/hearts_hakobaimg/img10.webp",
        "src/assets/hearts_hakobaimg/img11.webp",
        "src/assets/hearts_hakobaimg/img12.webp",
      ],
      name: "Chic Anarkali Kurti",
      currentPrice: 2199,
      originalPrice: 2499,
      discount: "12%",
    },
    {
      id: 4,
      images: [
        "src/assets/hearts_hakobaimg/img13.webp",
        "src/assets/hearts_hakobaimg/img14.webp",
        "src/assets/hearts_hakobaimg/img15.webp",
      ],
      name: "Embroidered Straight Kurti",
      currentPrice: 1999,
      originalPrice: 2299,
      discount: "13%",
    },
    {
      id: 5,
      images: [
        "src/assets/hearts_hakobaimg/heroine.jpg",
        // "src/assets/hearts_hakobaimg/img18.webp",
        // "src/assets/hearts_hakobaimg/img19.webp",
        // "src/assets/hearts_hakobaimg/img20.webp",
      ],
      name: "Traditional Silk Kurti",
      currentPrice: 2499,
      originalPrice: 2799,
      discount: "10%",
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
    setOtpPopupVisible(true); // Show OTP Popup on wishlist icon click
  };

  const closeOtpPopup = () => {
    setOtpPopupVisible(false); // Close OTP Popup
  };

  return (
    <>
      <h2 className="kurti-heading">Hearts & Hakoba</h2>
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
              onWishlistClick={handleWishlistClick} // Pass wishlist click handler
            />
          ))}
        </div>
      </div>

      {isOtpPopupVisible && <OtpPopup onClose={closeOtpPopup} />} {/* Conditionally render OTP Popup */}
    </>
  );
};

const KurtiCard = ({ id, images, name, currentPrice, originalPrice, discount, addToCart, onWishlistClick }) => {
  const [isWishlistActive, setWishlistActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoverActive, setHoverActive] = useState(false);

  useEffect(() => {
    let interval;
    if (hoverActive) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [hoverActive, images.length]);

  const toggleWishlist = (e) => {
    e.stopPropagation(); // Prevent parent click handler from firing
    setWishlistActive((prev) => !prev);
    onWishlistClick(); // Trigger OTP popup on wishlist icon click
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
          className={`wishlist-icon ${isWishlistActive ? "active" : ""}`}
          onClick={toggleWishlist} // Show OTP popup on wishlist icon click
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

export default Hearts_hakoba;
