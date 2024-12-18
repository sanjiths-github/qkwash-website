import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {

  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [showTerms, setShowTerms] = useState(false); // State for Terms and Conditions popup
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (!name) {
      newErrors.name = "Name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/otp-verification"); // Redirect to OTP Verification page
    }
  };


  return (
    <div className="container2">
    <div className="login-box">
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-innovation-concept-with-ideas_23-2149153088.jpg"
          alt="Login Visual"
          className="login-image"
        />
      </div>
      <div className="login-section">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Mobile Number"
            className="input-field"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {errors.mobile && <span className="error-text">{errors.mobile}</span>}
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="terms-text">
        By clicking this, you accept the{" "}
        <span className="terms-link" onClick={() => setShowTerms(true)}>
          Terms and Conditions
        </span>.
      </p>
    </div>
  </div>


  {showTerms && (
    <div className="terms-popup-overlay" onClick={() => setShowTerms(false)}>
      <div className="terms-popup" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="popup-header">
          <h3>Terms and Conditions & Privacy Policy</h3>
        
        </div>

        {/* Content */}
        <div className="terms-content">
          <h4>Your Right to Cancel</h4>
          <p>
            At QKWash Ltd, we want you to be fully satisfied every time you top up your account using the
            QKWash Laundry App. You have the right to cancel your purchase of app credit. However, we regret
            that we cannot accept cancellations of top-up purchases if any or all of the credit has been used.
          </p>
          <h4>Refund Policy</h4>
          <p>
            To cancel a credit made through the QKWash Laundry App, please contact QKWash Services Ltd within
            seven working days of receiving the top-up confirmation via email.. To
            facilitate a quick refund process, please provide the reason
            for your refund request, along with your top-up purchase
            receipt. Send these details to: 
            <p>
  QKWash Services Ltd<br />
  North Paravur, Ernamkulam, Kerala <br />
  For app credit refunds, please email: refunds@qkwash.com
</p>
            
            
          </p>
          <h4>Responsibility</h4>
          <p>
            Your QKWash app account and its associated credit are your sole responsibility. Please ensure that
            you keep your login details safe, as your app account should be treated like cash.
          </p>
          <p>

          For your protection, we recommend using a recorded-delivery 
          service when returning any physical items related to your
           refund request. Please note that you are responsible for any 
          return costs, and QKWash Services Ltd will not be liable for 
          lost items during transit.
          </p>

          <h4>Policy for Unused Credit</h4>
          <p>
          If you wish to receive a refund for partially used credit,
          please contact us via email at refunds@qkwash.com and
          provide the following:
          </p>
          <p>A screenshot of your QKWash app account
          The reason for requesting a refund
          A copy of your original receipt or transaction details, including
           your PayPal receipt with the Transaction or Receipt ID number
          Refunds will not be issued for any free or promotional credit.</p>
       
          <h4>Lost Accounts or App Access</h4>
          <p>Your QKWash app account and its associated credit are your
          sole responsibility. QKWash Ltd will not accept liability for 
         any lost credit if you lose access to your app account. Please 
         ensure that you keep your login details safe, as your app
          account should be treated like cash. No credit will be restored
          on lost or deleted app accounts.</p>

          <h4>Account Recovery</h4>
          <p>QKWash Ltd reserves the right to charge a nominal fee for
           account recovery or the restoration of lost app access.</p>
       
           <h4>Refund Policy for Faults</h4>
           <p>If you experience any loss of credit due to an error with the
           QKWash Laundry App or a machine, please
           email info@qkwash.com with the following details</p>

           <p>
           Your name<br />
           App username or account number<br />
           Site reference and site name <br/>
           Machines used <br/>
           Description of the fault experienced <br/>
           Amount of credit lost <br/>
           Please note that all faults must be reported within 
           48 hours of the incident.  <br/>
         </p>
         <h4>Changes to Terms and Conditions</h4>
         <p>QKWash Ltd reserves the right to amend these
         Terms and Conditions of Use without prior notice at any time.</p>  

          </div>
 
       

        {/* Footer Buttons */}
        <div className="popup-footer">
          <button className="close-button" onClick={() => setShowTerms(false)}>
            X
          </button>
        </div>
      </div>
    </div>

  )}
</div>
   
  )
}

export default Login
