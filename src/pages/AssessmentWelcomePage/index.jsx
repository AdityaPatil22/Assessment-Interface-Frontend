import { useState } from "react";
import AssesmentInterfaceReworkLogo from "../../assets/icons/AssessmentInterfaceReworkLogo";
import { Button, Menu, MenuItem, Fade } from "@mui/material";
import DownArrowIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

import "./style.scss";


function AssessmentWelcomePage() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
    setMenuVisible(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
    setMenuVisible(false);
  };

  return (
    <div className="welcome-page-main-container">
      <div className="welcome-page-top-container">
        <AssesmentInterfaceReworkLogo className="welcome-page-top-logo" />
        <div
          className={`landing_header_right_inner ${
            menuVisible ? "menu_active" : ""
          }`}
        >
          <Button
            id="solutions-button"
            aria-controls={currentMenu === "solutions" ? "solutions-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={currentMenu === "solutions" ? "true" : undefined}
            onClick={(e) => handleClick(e, "solutions")}
            endIcon={<DownArrowIcon sx={{ color: "#000" }} />}
            sx={{
              color: "#000",
              textTransform: "none",
              fontSize: "24px",
            }}
          >
            English (English)
          </Button>
          <Menu
            id="solutions-menu"
            MenuListProps={{
              "aria-labelledby": "solutions-button",
            }}
            anchorEl={anchorEl}
            open={currentMenu === "solutions"}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{
              '& .MuiPaper-root': {
                minWidth: '150px',
              },
            }}
          >
            <MenuItem  onClick={handleClose}>
              Language 1
            </MenuItem>
            <MenuItem  onClick={handleClose}>
              Language 2
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div className="welcome-page-bottom-container">
        <h1 className="welcome-page-bottom-heading">Welcome to the Assessment</h1>
        <div className="welcome-page-bottom-para-1">
          <p>
            This secured, AI proctored assessment will help us evaluate your
            skills in a controlled environment. You need to go through a few steps
            before you can start the assessment.
          </p>
        </div>
        <div className="welcome-page-bottom-para-2">
          <p>
            Please make sure you have your Aadhar card and registered mobile
            number with you for the verification process. Please go through all
            the steps to start your assessment.
          </p>
        </div>
        <div className="welcome-page-bottom-para-3">
          <p>We wish you the best for your assessment!</p>
        </div>
        <Link to="/system-check-1"> 
        <Button
          variant="outlined"
          className="help-support-btn"
          sx={{
            border: "solid 1px #5C27C0",
            color: "#fff",
            background: "#5C27C0",
            borderRadius: "2px",
            width: "155px",
            height: "56px",
            marginTop: "43px",
            fontWeight: "600",
            fontSize: "24px",
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
  );
}

export default AssessmentWelcomePage;
