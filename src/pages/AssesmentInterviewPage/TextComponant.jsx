import React from 'react';
import "./TextComponant.scss";
import AS from "../../assets/images/AS.svg";

function TextComponant() {
  return (
    <div className='interview-main-text-componant'>
      <div className="chat-box" id="scrollbar2">
        <div className="profile">
          <img src={AS} alt="Profile" />
          <div className="name-profile">
            <h3>Alex Smith</h3>
            <p>My name is Alex Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextComponant;
