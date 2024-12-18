import React, { useState } from "react";
import "./Profile.css";
import SideMenu from "../components/SideMenu";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div>
    <SideMenu/>
    <div className="profile-editor">
      
      <div className="profile-picture-container">
        <div className="profile-picture">
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/245/516/non_2x/male-3d-avatar-free-png.png" /* Placeholder image */
            alt="Profile"
          />
          <div className="edit-icon">
            <span>✏️</span>
          </div>
        </div>
      </div>

    
      <div className="profile-details">
        <p className="profile-name">
          Name: <span>{isEditing ? <input type="text" defaultValue="Sanjith" /> : "Sanjith"}</span>
        </p>
        <p className="profile-info">
          Mobile Number:{" "}
          <span>{isEditing ? <input type="text" defaultValue="777777777" /> : "777777777"}</span>
        </p>
        <p className="profile-info">
          Hub Name: <span>{isEditing ? <input type="text" defaultValue="Kochi" /> : "Kochi"}</span>
        </p>
      </div>

      {/* Edit Button */}
      <button className="edit-button" onClick={toggleEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
    </div>
  );
};

export default Profile;
