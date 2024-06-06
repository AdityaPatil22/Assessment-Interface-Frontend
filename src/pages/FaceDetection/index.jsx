import { useState, useEffect } from "react";
import AssesmentInterfaceReworkLogo from "../../assets/icons/AssessmentInterfaceReworkLogo";
import VideoCamera from "../../assets/icons/VideoCamera";
import verified_tick from "../../assets/images/verified_tick.png"
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CameraComponent from "./CameraComponent";

import "./style.scss";
import { Link } from "react-router-dom";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '70%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} 
        sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" background="008000">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function FaceDetectionPage() {
  const [isPurple, setIsPurple] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(10);
  const [verificationOpen, setVerificationOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setVerificationOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setProgress(10);
  };

  useEffect(() => {
    let timer;
    if (open) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setOpen(false);
              setVerificationOpen(true);
            }, 500);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 800);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [open]);

  const toggleBackgroundColor = () => {
    setIsPurple((prevState) => !prevState);
  };

  return (
    <div className="face_detection_page_main_container">
      <AssesmentInterfaceReworkLogo />
      <h1 className="face-detection-sub-heading">
        Facial Recognition for Verification
      </h1>

      <div className="face-detection-bottom-container">
        <div className="face-detection-bottom-left-container">
          <div className="face-detection-text-container">
            <h1 className="face-detection-text-heading">Why Face Detection?</h1>
            <p className="face-detection-text-para">
              This quick verification step helps ensure the security of your
              application process. We use facial recognition technology to
              confirm your identity and prevent unauthorized access.
            </p>
          </div>

          <div className="face-detection-text-container">
            <h2 className="face-detection-text-heading">
              Tips for Optimal Face Detection:
            </h2>
            <ul className="face-detection-text-ul">
              <li>
                <strong>Good Lighting:</strong> Find a well-lit area to avoid
                shadows on your face.
              </li>
              <li>
                <strong>Centered Face:</strong> Position your face in the center
                of the frame for clear recognition.
              </li>
              <li>
                <strong>Neutral Expression:</strong> Look directly at the camera
                with a neutral expression (no smiling, frowning, or sunglasses).
              </li>
              <li>
                <strong>Solid Background (Optional):</strong> A plain background
                can improve the accuracy of the recognition process.
              </li>
            </ul>
          </div>

          <div className="face-detection-text-container">
            <h2 className="face-detection-text-heading">Before You Begin:</h2>
            <ul className="face-detection-text-ul">
              <li>
                <strong>Grant Permissions:</strong> Grant permission to your
                browser to access your camera and microphone. Click “Allow” to
                grant access.
              </li>
              <li>
                <strong>Camera & Microphone Buttons:</strong> You need to click
                the camera and microphone button which is just below the live
                camera feed to enable the devices.
              </li>
              <li>
                <strong>During Detection:</strong> Do not close the window while
                the recognition is in process.
              </li>
            </ul>
          </div>
        </div>

        <div className="face-detection-bottom-right-container">
          <div className="camera-screen">
            <CameraComponent/>
          </div>
          

          <div className="face-detection-bottom-right-btn-container">
            <Button
              variant="outlined"
              className="help-support-btn"
              sx={{
                border: "solid 1px #fff",
                color: "#fff",
                background: isPurple ? "#5C27C0" : "#D43333",
                borderRadius: "100px",
                width: "60px",
                height: "60px",
                textTransform: "capitalize",
                "&:hover": {
                  border: "solid 1px #fff",
                  background: isPurple ? "#5C27C0" : "#D43333",
                },
              }}
              onClick={toggleBackgroundColor}
            >
              <VideoCamera />
            </Button>

            <Button
              variant="outlined"
              onClick={handleOpen}
              className="help-support-btn"
              sx={{
                border: "solid 1px #5C27C0",
                color: "#fff",
                background: "#5C27C0",
                borderRadius: "2px",
                width: "164px",
                height: "45px",
                fontWeight: "400",
                textTransform: "capitalize",
                "&:hover": {
                  border: "solid 1px #5C27C0",
                  color: "#5C27C0",
                },
              }}
            >
              Start Detect
            </Button>
          </div>
          <p className="face-detection-bottom-right-text">
            Click <strong>“Start Detection”</strong> when you’re ready to
            proceed.
          </p>
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div className="face-detection-overlay-container">
        <div className="camera-screen">
            <CameraComponent/>
          </div>
          <div className="face-detection-overlay-bottom-container">
            <Box sx={{ width: '50%' }}>
              <LinearProgressWithLabel value={progress} />
            </Box>
            <p><b>Do not close the window while the recognition is in process.</b></p>
          </div>
        </div>
      </Backdrop>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={verificationOpen}
        onClick={handleClose}
      >
        <div className="verified-container">
          <div className="verified-main">
            <img className="verified-img" src={verified_tick} alt='tick'/>
            <h1 className="verified-heading">Verified</h1>
            <p className="verified-para">Your facial recognition is verified. You can now proceed further.</p>
          </div>
          <div className="verified-btn-container">
            <Link to="/candidate-verification-adhaar">
            <Button
              variant="outlined"
              className="help-support-btn"
              sx={{
                border: "solid 1px #5C27C0",
                color: "#fff",
                background: "#5C27C0",
                borderRadius: "2px",
                width: "97px",
                height: "44px",
                fontWeight: "400",
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
          </div>
        </div>
      </Backdrop>
    </div>
  );
}

export default FaceDetectionPage;
