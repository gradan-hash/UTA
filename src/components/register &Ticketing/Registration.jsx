import { useState } from "react";
import "./Registration.css";
import StripeCheckout from "react-stripe-checkout";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticket: "Standard",
  });

  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Simulate Stripe payment
  const handleToken = (token) => {
    // Simulate payment success or failure
    const success = Math.random() > 0.2;  // 20% chance of failure

    if (success) {
      setPaymentStatus("success");
      alert("Payment Successful! Thank you for registering.");
    } else {
      setPaymentStatus("failure");
      alert("Payment Failed! Please try again.");
    }
  };

  return (
    <section className="registration-section">
      <h1 className="registration-title">
        Register for the UTA 2024 International Research Conference
      </h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="registration-label">
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="registration-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="registration-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="registration-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="ticket" className="registration-label">
          Select Ticket Type:
        </label>
        <select
          id="ticket"
          name="ticket"
          className="registration-select"
          value={formData.ticket}
          onChange={handleChange}
          required>
          <option value="Standard">Standard - $100</option>
          <option value="VIP">VIP - $250</option>
        </select>

        {/* Stripe Checkout Button */}
        <StripeCheckout
          stripeKey="pk_test_51MVpxAJyxU9jWGszmxGty7xyajalnEb8gZC7wXdSRE1TWuHNzj80msdDswkG0tVXNEybrCpcy2ARGPkAvyJV85nw00vvskyGqX"
          token={handleToken}
          name="Conference Registration"
          amount={formData.ticket === "VIP" ? 25000 : 10000} // Price in cents
          currency="USD"
          email={formData.email}>
          <button type="submit" className="registration-button">
            Proceed to Payment
          </button>
        </StripeCheckout>
      </form>

      {paymentStatus === "success" && (
        <div className="confirmation-message">
          <h2>Registration Successful!</h2>
          <p>
            Thank you, {formData.name}, for registering. A confirmation email
            has been sent to {formData.email} with your {formData.ticket} ticket
            details.
          </p>
        </div>
      )}

      {paymentStatus === "failure" && (
        <div className="error-message">
          <h2>Payment Failed!</h2>
          <p>
            Unfortunately, the payment process was unsuccessful. Please try
            again later.
          </p>
        </div>
      )}
    </section>
  );
};

export default Registration;
