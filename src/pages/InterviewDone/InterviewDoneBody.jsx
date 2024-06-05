import React from 'react'
// import InterviewDoneTick from "../../assets/images/InterviewDoneTick.svg"
import successTick from "./successTick.svg"
import { Button } from '@mui/material'
import "./style.scss"
function InterviewDoneBody() {
 
  return (
    <div className="interviewDoneBody">
    <div className="interview-main-container">
   <div className='interview-done-subcontainer'>
    <img src={successTick} alt="" />
<div className='heading-and-subheading-interview-donepage'>
    <h1>Interview Done</h1>
    <div className='subline-in-interview-done'>
    <p>you’re now safe to close the window</p>
    </div>
  </div>
   </div>
   <div className="feedback-button">
      <Button
                sx={{
                  border: "solid 1px #5C27C0",
                  color: "#fff",
                  marginTop: "14px",
                  marginBottom: "40px",
                  borderRadius: "4.75px",
                  width: "110px",
                  height: "40px",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  background: "#5C27C0",
                  fontSize: "18px !important",
                  alignSelf: "center",
                  padding: "10px",

                  "&:hover": {
                    background: "#fff",
                    color: "#5C27C0",
                    border: "solid 1px #5C27C0",
                  },
                }}
              >
                <p>Exit</p>

              </Button>
   </div>
   </div>
   </div>
  )
}

export default InterviewDoneBody