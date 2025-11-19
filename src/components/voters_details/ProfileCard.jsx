import React from "react";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-left">
        <div className="profile-avatar">
          <div className="avatar-inner"></div>
        </div>
      </div>

      <div className="profile-center">
        <h2 className="profile-name">उनडकर मौलिक मुकेश</h2>

        <div className="profile-row">
          <span>क्रमांक : 1</span>
          <span>वय: 52</span>
        </div>

        <div className="profile-row">
          <span>अ.क्र. 2</span>
          <span>लिंग: M</span>
        </div>
      </div>
    </div>
  );
}
