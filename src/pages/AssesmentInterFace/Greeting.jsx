import React from 'react'
import "./Instruction.scss"
function Greeting() {
  return (
    <>
    <div className="instruction-content">
    <div className="instruction-information">
      <div className="instruction-heading">
        <h1>Hi Candidate,</h1>
        <div className="video-frame-instruction-welcome-paragraph">
        <p>
          Welcome to the assessment page, this is an AI proctored
          assessment which helps us to evaluate your skills in a
          controlled environment. Please remember that this is a closed
          book assessment.
        </p>
        </div>
      </div>
      <div className="greeting-paragraph">
        <div className="video-frame-instruction-welcome-paragraph">
        <p>
          {" "}
          Before you go ahead with the assessment, kindly go through the
          instructions mentioned below to help you understand the
          environment better.
        </p>
        </div>
      </div>
    </div>
    <div className="instruction-information">
      <h1>Instructions:</h1>
      <div className="instruction-point" >
      <div className="video-frame-instruction-welcome-paragraph">
        <p>
          {" "}
          1. The total estimated time for the assessment is 120 minutes.
          Please ensure that you submit the assessment in the given time.
        </p>
        </div>
        <div className="video-frame-instruction-welcome-paragraph">
        <p>
          2. Please remember that this is a closed book assessment and
          hence you are requested not to refer to any material during the
          entirety of the assessment.
        </p>
        </div>
        <div className="video-frame-instruction-welcome-paragraph">
        <p>
          3. Also, remember that you are constantly monitored throughout
          the entire assessment and any flagged actions may result in
          ending your assessment.
        </p>
        </div>
      </div>
      <div className="video-frame-instruction-welcome-paragraph">
      <p>
        Please read the below Do’s and Don’ts before taking the assessment
        and strictly adhere to these points.
      </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Greeting