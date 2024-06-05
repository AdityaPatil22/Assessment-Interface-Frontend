import React from "react";
import "./VidioFrame.scss";
// import alexsmith from "./alex.png";
// import interview from "./interview.png";
import alexsmith from "../../assets/images/alex.png"
import interview from "../../assets/images/interview.png"
function VidioFrame() {
  return (
    <>
    <div  className="interview-with-candidate-screen">

    <div className="video-interview-with-ai">
      <div className="video-frame-container" >
        <div
          className="video-frame-right"
         
        >
          <img src={interview} alt="" />
        </div>
        <div
          className="video-frame-left"
        
        >
          <img src={alexsmith} alt="" />
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default VidioFrame;
