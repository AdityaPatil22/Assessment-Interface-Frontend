// import React from "react";
import { Button } from "@mui/material";
import AssessmentInternetLogo from "../../assets/images/AssessmentInternetLogo.png";
import AssessmentCameraLogo from "../../assets/images/AssessmentCameraLogo.png";
import AssessmentwwwLogo from "../../assets/images/AssessmentwwwLogo.png";
import AssessmentMicrophoneLogo from "../../assets/images/AssessmentMicrophoneLogo.png";
// import Backdrop from "@mui/material/Backdrop";
// import BrowserErrorCross from "../../assets/icons/BrowserErrorCross";
// import BrowserErrorAlarm from "../../assets/images/BrowserErrorAlarm.png";
import SystemCheckTick from "../../assets/images/SystemCheckTick.png";
import SystemCheckCross from "../../assets/images/SystemCheckCross.png";
import "./style.scss";
import { Link } from "react-router-dom";

function SystemCheck2() {
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div className="system-check-2-main-container">
      <div className="system-check-heading-container">
        <p className="system-check-heading">System Compatibility</p>
        <p className="system-check-para">
          Kindly click on the below button to perform a system check to make
          sure that your system is compatible to take the test
        </p>
      </div>

      <div className="system-check-items-container">
        <div className="system-check-item">
          <img src={AssessmentInternetLogo} alt="" />
          <p className="system-check-item-para">Internet</p>
          <img
            className="system-check-item-status-internet"
            src={SystemCheckTick}
            alt="tick"
          ></img>
        </div>

        <div className="system-check-item">
          <img src={AssessmentCameraLogo} alt="" />
          <p className="system-check-item-para">Camera</p>
          <img
            className="system-check-item-status-camera"
            src={SystemCheckTick}
            alt="tick"
          ></img>
        </div>

        <div className="system-check-item">
          <img src={AssessmentwwwLogo} alt="" />
          <p className="system-check-item-para">Browser</p>
          <img
            className="system-check-item-status-browser"
            src={SystemCheckCross}
            alt="tick"
          ></img>
        </div>

        <div className="system-check-item">
          <img src={AssessmentMicrophoneLogo} alt="" />
          <p className="system-check-item-para">Microphone</p>
          <img
            className="system-check-item-status-microphone"
            src={SystemCheckTick}
            alt="tick"
          ></img>
        </div>
      </div>
      <Link to="/face-detection">
      <Button
        variant="outlined"
        className="help-support-btn"
        // onClick={handleOpen}
        sx={{
          border: "solid 1px #5C27C0",
          color: "#fff",
          background: "#5C27C0",
          borderRadius: "2px",
          width: "216px",
          height: "56px",
          marginTop: "43px",
          fontWeight: "600",
          textTransform: "capitalize",
          "&:hover": {
            border: "solid 1px #5C27C0",
            color: "#5C27C0",
          },
        }}
      >
        Next
      </Button>
      </Link>
      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div className="browser-error-container">
          <div className="browser-error-top-container">
            <p>Browser Error</p>
            <BrowserErrorCross />
          </div>

          <div className="browser-error-bottom-container">
            <div className="browser-error-text-container">
              <img src={BrowserErrorAlarm} alt="alarm"></img>
              <p className="browser-error-text">
                We have detected a problem with your browsers compatibility.
              </p>
            </div>
          </div>

          <div className="browser-error-btn-container">
            <Button
              variant="outlined"
              className="help-support-btn"
              sx={{
                border: "solid 1px #5C27C0",
                color: "#fff",
                background: "#5C27C0",
                borderRadius: "2px",
                width: "113px",
                height: "44px",
                fontWeight: "400",
                textTransform: "capitalize",
                "&:hover": {
                  border: "solid 1px #5C27C0",
                  color: "#5C27C0",
                },
              }}
            >
              Try again
            </Button>
          </div>
        </div>
      </Backdrop> */}
    </div>
  );
}

export default SystemCheck2;
