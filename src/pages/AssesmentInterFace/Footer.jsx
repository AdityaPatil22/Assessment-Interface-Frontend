import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Instruction.scss";
function Footer() {
  return (
    <>
      <div className="footer-content">
        <div className="video-frame-instruction-welcome-paragraph">
          <p>
            Please remember that you are closely monitored for the entirety of
            the assessment and avoid any actions which may trigger violation
            flags as this may cause an abrupt end to your assessment.
          </p>
        </div>
        <div className="starter-line-to-start-interview">
          <p>
            Click on <b>“Start”</b> to take the assessment.
          </p>
        </div>
        <div
          className="reverse-btn"
        >
          <Link to="/assesment-interface-interview">
            <Button
              variant="outlined"
              sx={{
                border: "solid 1px #5C27C0",
                color: "#fff",
                marginTop: "14px",
                marginBottom: "40px",
                borderRadius: "4.75px",
                width: "177px",
                height: "46px",
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
              Start
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
