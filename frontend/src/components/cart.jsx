import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart, updateCartQuantity }) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(80); // Default delivery fee
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // State for payment method
  const navigate = useNavigate(); // Initialize useNavigate

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.currentPrice || 0) * item.quantity,
    0
  );

  // Calculate discounted price based on the discount and delivery fee
  const discountedPrice = totalPrice - discount + deliveryFee;

  const handleApplyCoupon = () => {
    // Clear previous discount and delivery fee when applying a new coupon
    setDiscount(0);
    setDeliveryFee(80); // Reset delivery fee to default

    if (couponCode === "DISCOUNT10") {
      setDiscount(totalPrice * 0.10); // 10% discount
      alert("Coupon applied! You get a 10% discount.");
    } else if (couponCode === "SUMMER15") {
      setDiscount(totalPrice * 0.15); // 15% discount
      alert("Coupon applied! You get a 15% discount.");
    } else if (couponCode === "FREESHIP") {
      setDiscount(0); // No discount on price, but delivery fee becomes free
      setDeliveryFee(0); // Set delivery fee to 0
      alert("Coupon applied! You get free shipping.");
    } else {
      alert("Invalid coupon code.");
    }
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value); // Update the selected payment method
  };

  // Effect to hide delivery fee and order summary if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      setDeliveryFee(0); // No delivery fee when cart is empty
    }
  }, [cartItems]);

  // Function to handle continue button click and navigate to SignupForm
  const handleContinueClick = () => {
    navigate("/Signup-form"); // Navigate to SignupForm
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart ({cartItems.length} Items)</h1>

      <div className="cart-content">
        {/* Left Section - Cart Items */}
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty. Start adding items!</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">₹{item.currentPrice}</p>
                  <div className="cart-item-controls">
                    <label>
                      Size: <select>
                        <option>10</option>
                      </select>
                    </label>
                    <label>
                      Qty:
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartQuantity(item.id, parseInt(e.target.value))
                        }
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                  style={{ backgroundColor: 'brown', color: 'white', width: '100px', fontSize: '10px' }}

                >
                  REMOVE
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right Section - Order Summary (conditionally rendered) */}
        {cartItems.length > 0 && (
          <div className="order-summary">
            <h2>Coupons and Offers</h2>
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="coupon-input"
            />
            <button onClick={handleApplyCoupon} className="apply-coupon-button">
              Apply
            </button>
            <p className="coupon-text">Save more with coupon and offers</p>
            <hr />

            <div className="order-pricing">
              <p>Item Total: <span>₹{totalPrice}</span></p>
              {discount > 0 && <p>Discount: <span>-₹{discount}</span></p>}
              <p>Delivery Fee: <span className="free-delivery">₹{deliveryFee}</span></p>
              <hr />
              <p className="grand-total">
                Grand Total: <span>₹{discountedPrice}</span>
              </p>
            </div>

            <p className="delivery-time">
              Average delivery time: <strong>3-5 days</strong>
            </p>

            {/* Payment Method Section */}
            <div className="payment-method">
              <h3>Select Payment Method</h3>
              <div>
                <label>
                  <input
                    type="radio"
                    value="COD"
                    checked={selectedPaymentMethod === "COD"}
                    onChange={handlePaymentMethodChange}
                  />
                  Cash on Delivery (COD)
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="BHIM"
                    checked={selectedPaymentMethod === "BHIM"}
                    onChange={handlePaymentMethodChange}
                  />
                  BHIM
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="RuPay"
                    checked={selectedPaymentMethod === "RuPay"}
                    onChange={handlePaymentMethodChange}
                  />
                  RuPay
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Visa"
                    checked={selectedPaymentMethod === "Visa"}
                    onChange={handlePaymentMethodChange}
                  />
                  Visa
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Net Banking"
                    checked={selectedPaymentMethod === "Net Banking"}
                    onChange={handlePaymentMethodChange}
                  />
                  Net Banking
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Credit Card"
                    checked={selectedPaymentMethod === "Credit Card"}
                    onChange={handlePaymentMethodChange}
                  />
                  Credit Card
                </label>
              </div>

              {/* Show the selected payment method */}
              <p>
                Selected Payment Method: <strong>{selectedPaymentMethod}</strong>
              </p>
            </div>

            <button className="continue-button" onClick={handleContinueClick}>Continue</button>
          </div>
        )}
      </div>

      <div className="payment-icons">
        <img src="src/assets/paymentsimage/visa.svg" alt="Visa" />
        <img src="src/assets/paymentsimage/rupay.svg" alt="RuPay" />
        <img src="src/assets/paymentsimage/bhim.svg" alt="BHIM" />
        <img src="src/assets/paymentsimage/cod.svg" alt="Cash on Delivery" />
        <img src="src/assets/paymentsimage/netbanking.svg" alt="Net Banking" />
      </div>
    </div>
  );
};

export default Cart;
