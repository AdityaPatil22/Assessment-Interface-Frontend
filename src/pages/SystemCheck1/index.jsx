import { Button } from "@mui/material";
import AssessmentInternetLogo from "../../assets/images/AssessmentInternetLogo.png";
import AssessmentCameraLogo from "../../assets/images/AssessmentCameraLogo.png";
import AssessmentwwwLogo from "../../assets/images/AssessmentwwwLogo.png";
import AssessmentMicrophoneLogo from "../../assets/images/AssessmentMicrophoneLogo.png";

import "./style.scss";
import { Link } from "react-router-dom";

function SystemCheck1() {
  return (
    <div className="system-check-main-container">
      <div className="system-check-heading-container">
        <p className="system-check-heading">System Compatibility</p>
        <p className="system-check-para">
          Kindly click on the below button to perform a system check to make
          sure that your system is compatible to take the test
        </p>
      </div>

      <div className="system-check-items-container">
        <div className="system-check-item">
          <img src={AssessmentInternetLogo} alt="internet" />
          <p className="system-check-item-para">Internet</p>
        </div>

        <div className="system-check-item">
          <img src={AssessmentCameraLogo} alt="internet" />
          <p className="system-check-item-para">Camera</p>
        </div>

        <div className="system-check-item">
          <img src={AssessmentwwwLogo} alt="internet" />
          <p className="system-check-item-para">Browser</p>
        </div>

        <div className="system-check-item">
          <img src={AssessmentMicrophoneLogo} alt="internet" />
          <p className="system-check-item-para">Microphone</p>
        </div>
      </div>
      <Link to="/system-check-2">
      <Button
        variant="outlined"
        className="help-support-btn"
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
        Verify
      </Button>
      </Link>
    </div>
  );
}

export default SystemCheck1;
