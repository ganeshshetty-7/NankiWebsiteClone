import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PiHandbag } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { RiDiscountPercentFill } from "react-icons/ri";
import ImageSlider from "./components/imageslider";
import TopCategories from "./components/topcategories";
import ShirtsKurtis from "./components/clothescategories/shirts_kurtis";
import ShirtKurtisAll from "./ShirtKurtisAll";
import AboutUs from "./components/About_us";
import RefundExchangePolicy from "./components/Returnexchange";
import OtpPopup from "./OtpPopup"; 
import TermsAndConditions from "./TermsAndCondition";
import Cart from "./components/cart";
import ContactInformation from "./ContactInformation";
import ShippingPolicy from "./ShippingPolicy";
import EverydayShirts from "./components/clothescategories/Everydayshirts";
import EverydayShirtsAll from "./Everydayshirtsall";
import Hearts_hakoba from "./components/clothescategories/Hearts_hakoba";
import Hearts_hakobaall from "./hearts_hakobaall";
import "./App.css";
import SearchPage from "./SearchPage";
import allProducts from "./Products";
import SignUpForm from "./SignUpForm";
import Logged_in from "./Login";





function App() {
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [otpPopupVisible, setOtpPopupVisible] = useState(false);
  const [offersPopupVisible, setOffersPopupVisible] = useState(false); // State for Offers Popup
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 
  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setCartMessage(`${item.name} added to cart!`);
    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  };

  
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter(cartItem => cartItem.id !== id);
    });
  };

  const updateCartQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const toggleOtpPopup = () => {
    setOtpPopupVisible(!otpPopupVisible);
  };

  const openWhatsApp = () => {
    window.location.href = "https://wa.me/918169788418";
  };

  const toggleOffersPopup = () => {
    setOffersPopupVisible(!offersPopupVisible);
  };

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('Coupon code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy coupon code:', err);
      });
  };



  return (
    <>
      <header className="navbar">
        <div className="top-banner">
          Flat 10% off on purchases above INR 1,999 | Ships in 24 hrs | Free Shipping | Easy Exchange & Return
        </div>
        <div className="nav-container">
          <div className="logo">
            <img src="/src/assets/NANAKi.png" alt="Logo" />
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active"><a href="/" style={{ color: "#71320d" }}>Home</a></li>
              <li><a onClick={() => navigate("/shop")}>Shop</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/return-exchange">Return & Exchange</a></li>
            </ul>
          </nav> 
        
          <div className="nav-icons">
            <a href="#" onClick={toggleOtpPopup}>
              <IoMdHeartEmpty className="icon" title="Wishlist" />
            </a>
            <a href="/search">
              <IoSearchOutline className="icon" title="Search" />
            </a>
            <a href="/Signup-form">
              <GoPerson className="icon" title="Account" />
            </a>
            <a href="#" onClick={() => navigate("/cart")}>
              <PiHandbag className="icon" title="Cart" />
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<><ImageSlider /><TopCategories /><ShirtsKurtis addToCart={addToCart} /><EverydayShirts addToCart={addToCart}/> <Hearts_hakoba addToCart={addToCart}/></>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/return-exchange" element={<RefundExchangePolicy />} />
          <Route path="/shop" element={<TopCategories />} />
          <Route path="/shirts-kurtis-all" element={<ShirtKurtisAll addToCart={addToCart} />} />
          <Route path="/everyday-shirts-all" element={<EverydayShirtsAll addToCart={addToCart}/>}/>
          <Route path="/hearts-hakoba-all" element={<Hearts_hakobaall addToCart={addToCart}/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact-information" element={<ContactInformation />} />
          <Route path="/Signup-form" element={<SignUpForm />} />
          <Route path="/login-form" element={<Logged_in />} />
          <Route path="/search" element={<SearchPage allProducts={allProducts} />}/>
          </Routes>
         
        

      </main>

      {otpPopupVisible && <OtpPopup onClose={toggleOtpPopup} />}

      <div className="floating-buttons">
        <button 
          className="offers-btn" 
          onClick={toggleOffersPopup} 
          style={{
            fontSize: '20px', // Increase font size
            padding: '  6px 20px 6px 20px',
          }}
        >
          Offers <span><RiDiscountPercentFill/></span>
        </button>

        <button className="whatsapp-btn" onClick={openWhatsApp}>
          <FaWhatsapp size={30}  /> 
        </button>
      </div>

      {offersPopupVisible && (
        <div className="offers-sidebar">
          <div className="offers-content">
            <h3>Coupons & Offers</h3>
            <u> <h4>Available Coupons</h4></u> 
            {[{ code: 'DISCOUNT10', description: 'Use coupon code DISCOUNT10 for 10% off your purchase!' },
              { code: 'SUMMER15', description: 'Use coupon code SUMMER15 for 15% off your summer items!' },
              { code: 'FREESHIP', description: 'Use coupon code FREESHIP for free shipping' }].map((offer, index) => (
                <div key={index} style={{ marginBottom: '20px',border:'1px solid black',padding:'10px' }}>
                  <p>{offer.description}</p>
                  <strong>{offer.code}</strong>
                  <button className="copy-btn" onClick={() => copyCouponCode(offer.code)} 
                    style={{ backgroundColor: 'transparent', color: '#ff5e00', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s ease' }}>
                    Copy Code
                  </button>
                </div>
            ))}
            <button className="close-btn" onClick={toggleOffersPopup} style={{ position: 'absolute', top: '10px', left: '190px', fontSize: '20px' }}>X</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <h3>Our customers love us!</h3>
        <div className="reviews">
        <div><p>"Thank you for making such a beautiful n affordable shirt. Just loveed it. Lots of love n wishes to your entire team" </p> <span><h4> - Pappu Podder</h4></span></div>
        <div> <p>"Been your old customer, have about 6 of your shirts and I really enjoy the prints, fabric and the overall feel" </p><span><h4> - Devika</h4></span></div>
          <div><p>"Outstanding shirt kurti fit and quality. Looking forward to the new prints."</p> <span><h4> - Sona Truman</h4></span></div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="quick-links">
            <h4>Quick links</h4>
            <ul>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/contact-information">Contact Information</a></li>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/return-exchange">Returns and Exchanges</a></li>
            </ul>
          </div>
          <div className="address">
            <p>Address: Mumbai</p>
            <a href="https://www.instagram.com/nanaki_shop/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
