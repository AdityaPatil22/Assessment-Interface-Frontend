import React from "react";
import check from "../../assets/images/check.svg";
import Wcheck from "../../assets/images/Close.svg";
import "./DosAndDonts.scss";

const dos = [
  "Please keep your camera and microphone on and unmuted throughout the entire assessment.",
  "Always look at the screen while taking the assessment.",
  "You are only allowed to use a pen/pencil and a paper during the assessment.",
  "Please ensure that you are in a professional attire during the assessment.",
  "Please ensure you are in a well-lit and quiet environment with a clear view of your workspace for the AI proctor to function effectively.",
];

const donts = [
  "Do not switch off your camera or microphone during the entirety of the assessment.",
  "Do not look away from the screen while taking the assessments.",
  "Do not switch between the tabs during the assessment.",
  "Do not open any other window once your assessment is started.",
  "Do not talk to anyone during the entirety of the assessment.",
  "Do not take your face or body off the camera, since you are continuously monitored, this may result in violation of the integrity of the assessment.",
  "Do not bring or use any other object or material throughout the entire assessment.",
  "Do not attempt to access external resources.",
];

const DosAndDonts = () => {
  return (
    <div
      className="dosanddonts
    "
    >
      <div className="dosanddonts-inner-container">
        <div className="dos-main-box">
          <div className="dos-box">
            <h2>Do's</h2>
          </div>
          <div className="tick-and-content">
            {dos.map((item, index) => (
              <div key={index} className="dos-content-box">
                <img src={check} alt="check" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dosanddonts-inner-container">
        <div className="dos-main-box">
          <div
            className="donts-box"
            style={{}}
          >
            <h2>Dont's</h2>
          </div>
          <div
            className="tick-and-content-for-dont"
          >
            {donts.map((item, index) => (
              <div key={index} className="dos-content-box">
                <img src={Wcheck} alt="close" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosAndDonts;
