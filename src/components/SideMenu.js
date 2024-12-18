import React, { useState } from 'react';
import { FaUser, FaHistory, FaBell, FaHome, FaTrophy, FaTasks, FaQrcode, FaCog, FaSignOutAlt, FaHubspot } from 'react-icons/fa';

import './SideMenu.css';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const profileImageUrl = "https://th.bing.com/th/id/OIP.JXgP4IYJbX7BoAqPgz3RQwHaLH?rs=1&pid=ImgDetMain";


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>

      <div
        className={`hamburger ${isOpen ? 'move-with-menu' : ''}`}
        onClick={toggleMenu}
      >
        {isOpen ? <span className="close-sign">✖</span> : (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>

      {/* Sidebar */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="profile-section">
          <div
            className="profile-pic"
            style={{
              backgroundImage: `url(${profileImageUrl})`,
            }}
          ></div>
          <span className="profile-name1">Hi, Alex</span>
        </div>

        <ul className="menu-list">

          <li>
            <Link to="/Home">
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link to="/qrcode-scanner">
              <FaQrcode /> QR - Scanner
            </Link>
          </li>

          <li>
            <Link to="/running-jobs">
              <FaTasks />Running Jobs
            </Link>
          </li>

          <li>
            <Link to="/History">
              <FaHistory />History
            </Link>
          </li>

          
          <li>
            <Link to="/Hub-details">
              <FaHubspot />Hub Details
            </Link>
          </li>

          
          <li>
            <Link to="/Notification">
            <FaBell /> Notifications
            </Link>
          </li>

          <li>
          <Link to="/reward">
          <FaTrophy />Rewards
          </Link>
        </li>

        <li>
        <Link to="/profile">
        <FaUser />Profile
        </Link>
      </li>

         
          <li className="settings-item" onClick={toggleDropdown}>
            <FaCog />Settings
            <ul className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <li>👤 Profile</li>
            </ul>
          </li>
        </ul>

        <button className="logout-btn"><FaSignOutAlt /> Logout</button>
      </div>
    </div>
  );
};

export default SideMenu;
