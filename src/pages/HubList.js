import React, { useState } from 'react'
import SideMenu from '../components/SideMenu'
import './HubList.css'
import { FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HubList = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisible2, setPopupVisible2] = useState(false);
  const [isToggleOn, setToggleOn] = useState(false);

  const [selectedButton, setSelectedButton] = useState(null);//first box
  const [selectedButtontime, setSelectedButtontime] = useState(null);//first box
  
  
  const [selectedButton2, setSelectedButton2] = useState(null);//second box

  const handleButtonClick0 = () => {
    setPopupVisible(true);
  };

  const handleButtonClick1 = () => {
    setPopupVisible2(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleClosePopup2 = () => {
    setPopupVisible2(false);
  };

  

  const handleButtonClick2 = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  
  const handleButtonClick3 = (buttonIndex) => {
    setSelectedButton2(buttonIndex);
  };

  const handleButtonClick4 = (buttonIndex) => {
    setSelectedButtontime(buttonIndex);
  };





  const handleToggle = () => {
    setToggleOn((prev) => !prev);
  };

  return (
    <div>
    <SideMenu/>

    <div className="container-location">
    <div className="glass-box-hub">
      <div className="icon-hub">
        <FaLocationArrow/> {/* Replace with an SVG or an actual icon */}
      </div>
      <span className="text-hub">Kerala hostel kochi</span>
    </div>
  </div>


    <div className="container-Hub">
    <div className="box-Hub">
    <div className="circle-Hub">
    <img src="https://cdn-icons-png.flaticon.com/512/125/125652.png" alt="Circle Icon" className="circle-image" />
    </div>
    <div className='Name'>Machine Name</div>
    <div className='sub-Name'>Washer 01</div>

    <button className="button-Hub" onClick={handleButtonClick0}>Available</button>
    </div>
    {isPopupVisible && (
      <div className="popup-overlay">
        <div className="popup">
          <button className="close-button" onClick={handleClosePopup}>
            ✖
          </button>

          
          <div className="popup-header">
          <div className="popup-left">
            <h2 className="title">Washer 01</h2>
            <div className="machine-info">
              <p className="label">Machine ID</p>
              <p className="subtext">#12345</p>
            </div>
          </div>
          <div className='popup-job'>Next Job</div>
          <div className="popup-right">
            
            <p className="status-hub">Free</p>
          </div>
          </div>

          <div className="button-group">
          {["Quick", "Steam", "Custom"].map((text, index) => (
            <button
              key={index}
              className={`select-button ${
                selectedButton === index ? "selected" : ""
              }`}
              onClick={() => handleButtonClick2(index)}
            >
              {text}
            </button>
          ))}
        </div>

        

        <div className="toggle-section">
        <p className="toggle-label">Detergent Preference</p>
        <div
          className={`toggle-button ${isToggleOn ? "active" : ""}`}
          onClick={handleToggle}
        ></div>
        </div>
        
        <div className="button-group2">
        {["03 Treat", "Detergent+", "Stiff Ultra"].map((text, index) => (
          <button
            key={index}
            className={`select-button2 ${
              selectedButton2 === index ? "selected" : ""
            }`}
            onClick={() => handleButtonClick3(index)}
          >
            {text}
          </button>
        ))}
      </div>

      <div className="button-group1">
      {["15 min Wash Time"].map((text, index) => (
        <button
          key={index}
          className={`select-button2 ${
            selectedButtontime === index ? "selected" : ""
          }`}
          onClick={() => handleButtonClick4(index)}
        >
          {text}
        </button>

      

      ))}
    </div>
       
    <Link to="/payment" className="continue-buttonn">
    Continue
  </Link>

         
        </div>
      </div>
    )}
    
       
    





   
   </div>
      
    </div>
  )
}

export default HubList
