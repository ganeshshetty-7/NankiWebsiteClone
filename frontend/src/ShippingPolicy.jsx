import React from "react";
import "./ShippingPolicy.css"; // Create a CSS file for styles if needed

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy">
      <h1>Shipping Policy</h1>
      <p>
        We are always working to have your products delivered to you with love and care. Please read our shipping and delivery policy before making a purchase with us.
      </p>
      
      <h2>What is NANA-KI’s delivery process?</h2>
      <p>
        We normally ship within 48 hours and it shall reach you within 3-7 working days across India. Once your order is dispatched, you will be notified on your given mobile number. If by mistake the phone number provided by you is invalid, we get in touch with you over the email provided by you.
      </p>
      <ul>
        <li>We offer free-of-cost delivery within the country for all prepaid orders.</li>
        <li>We courier through Bluedart or Delhivery for all our orders.</li>
        <li>CASH ON DELIVERY is available on all orders.</li>
      </ul>
      <p>
        Very Important – Please make an unboxing video of the package you receive or click pictures of opening the packaging, in order to claim any physical damage or missing product. No refund/exchange will be accepted without the video or image proof.
      </p>
      
      <h2>How long will it take for me to receive the order?</h2>
      
      <h3>Domestic orders</h3>
      <p>
        We dispatch the order in two days itself, but if the address/pin code/phone no. is incorrect or the pin code is unserviceable, then the time taken in the communication between NANA-KI and the buyer could take some extra days for us to dispatch your order.
      </p>
      <p>
        P.S: During festivals, adverse weather conditions, natural calamities or political crises, and curfews, your shipment may get further delayed due to dependency on courier companies. We assure you that we will try our best to have the product delivered to you as soon as possible and we truly appreciate your patience.
      </p>
      
      <h3>International orders</h3>
      <p>
        We deliver international shipments through our website. You can reach out to us at <a href="mailto:support@nanaki.co.in">support@nanaki.co.in</a> with the subject "International order" to enquire about the same.
      </p>
    </div>
  );
};

export default ShippingPolicy;
