import "./Footer.scss";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import mic from "../../assets/images/mic.svg";
import vidio from "../../assets/images/vidio.svg";
import callend from "../../assets/images/VideoEnd.svg"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Footer() {
  return (
    <>
      <div className="footer-nav">
      <div className="next-btn">
        <Link to="/assesment-interface">
       
         
            <Button
              sx={{
                color: "#fff",
                marginTop: "14px",
                marginBottom: "40px",
                width: "110px",
                height: "40px",
                fontWeight: "400",
                textTransform: "capitalize",
                background: "black",
                fontSize: "18px !important",
                alignSelf: "center",
                padding: "10px",
                alignItems: "center",
                display: "flex",
                border: "#e6d9ff solid 2px",
                borderRadius: "7px 7px 7px 7px",

                "&:hover": {
                  background: "#fff",
                  color: "#5C27C0",
                  border: "solid 1px #5C27C0",
                },
              }}
            >
              <img src={left} alt="" />
              <p>Previous</p>
            </Button>
         
        </Link>
        </div>
        <div className="interview-icons">
          <Button
            sx={{
              background: "black",
              border: "#707070 2px solid",
              borderRadius: "50%",
              height: "42px",
              width: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth:"50px"
            }}
          >
            <img src={vidio} alt="" />
          </Button>
          <Button
            sx={{
              background: "black",
              border: "#707070 2px solid",
              borderRadius: "50%",
              height: "42px",
              width: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth:"50px"
            }}
          >
            <img src={mic} alt="" />
          </Button>
          <Button
            sx={{
              background: "#D43333",
              border: "#707070 2px solid",
              borderRadius: "50%",
              height: "42px",
              width: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth:"50px"
            }}
          >
            <img src={callend} alt="" />
          </Button>
        </div>
        <div className="skip-next-btn">
        <div className="next-btn" >
            <Button
              sx={{
                color: "#fff",
                marginTop: "14px",
                marginBottom: "40px",
                width: "110px",
                height: "40px",
                fontWeight: "400",
                textTransform: "capitalize",
                background: "black",
                fontSize: "18px !important",
                alignSelf: "center",
                alignItems: "center",
                display: "flex",
                border: "#e6d9ff solid 2px",
                padding: "8px",
                borderRadius: "7px 7px 7px 7px",

                "&:hover": {
                  background: "#fff",
                  color: "#5C27C0",
                  border: "solid 1px #5C27C0",
                },
              }}
            >
              skip
            </Button>
          </div>
          <div className="next-btn">
            <Link to="/InterviewDonePage">
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
                <p>Next</p>
                <img src={right} alt="" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
