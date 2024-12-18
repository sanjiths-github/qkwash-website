import React, { useState } from 'react'
import "./OtpVerification.css";




const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]); 
  const [isVerified, setIsVerified] = useState(false); 
  const [resent, setResent] = useState(false); 
  const userMobileNumber = "9876543023"; 


  const maskedMobileNumber = `**${userMobileNumber.slice(-2)}`;


  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  
  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      setIsVerified(true); 
      setTimeout(() => {
       
        window.location.href = "/home";
      }, 2000);
    } else {
      alert("Please enter a valid OTP!");
    }
  };

 
  const handleResend = () => {
    setResent(true);
    setTimeout(() => {
      alert("OTP has been resent to your registered mobile number.");
      setResent(false);
    }, 2000); 
  };

    return (
        
      <div className="otp-container">
      <div className="otp-box">
        {isVerified ? (
          <div className="verified-section">
            <div className="verified-icon">
              <div className="circle">
                <div className="tick"></div>
              </div>
            </div>
            <h2 className="verified-text">Verified</h2>
          </div>
        ) : (
          <>
            <h2>OTP Verification</h2>
            <img
              src="https://miro.medium.com/v2/resize:fit:1000/1*nXgod8eI9Gslpi4oCfsDew.jpeg"
              alt="Verification"
              className="verification-image"
            />
            <p className="mobile-text">
              OTP has been sent to the registered mobile number ending with{" "}
              {maskedMobileNumber}.
            </p>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="otp-input"
                />
              ))}
            </div>
            <button onClick={handleVerify} className="verify-button">
              submit
            </button>
            <p className="resend-text">
              Didn't receive OTP?{" "}
              <button
                onClick={handleResend}
                className="resend-button"
                disabled={resent}
              >
                Resend OTP
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

  
  export default OtpVerification;