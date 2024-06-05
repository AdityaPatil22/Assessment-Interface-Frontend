import './style.scss'
import Header from '../../components/AssessmentHeader/Header'
import { useState} from "react";
import OtpInput from "react-otp-input";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import verified_tick from "../../assets/images/verified_tick.png"
import CandidateVerificationTick from '../../assets/icons/CandidateVerificationTick'
import { Link } from 'react-router-dom';

export default function CandidateVerificationEnterOtp() {

    const [code, setCode] = useState("");
    // const [error, setError] = useState("");
    const handleChange = (code) => setCode(code);
    const [verificationOpen, setVerificationOpen] = useState(false);

    const handleClose = () => {
        setVerificationOpen(false);
    };

    return (
        <div className="candidate-verification-enter-otp-outer-container">
            <Header />
            <div className="candidate-verification-inner-container">
                <div className='candidate-verification-content-container'>
                    <h1>Candidate Verification</h1>
                    <div className='tick-text-container'>
                        <CandidateVerificationTick />
                        <p>OTP sent to the registered mobile number</p>
                    </div>
                    <h2 className='enter-otp-text'>Enter OTP</h2>
                    <OtpInput
                        value={code}
                        onChange={handleChange}
                        numInputs={6}
                        separator={<span style={{ width: "8px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                            border: "1px solid #000000",
                            borderRadius: "8px",
                            width: "64px",
                            height: "64px",
                            fontSize: "48px",
                            color: "#000000",
                            fontWeight: "400",
                            caretColor: "blue",
                            marginRight: "10px",
                            marginBottom: "32px",
                            outline: "none",
                        }}
                        focusStyle={{
                            border: "1px solid #CFD3DB",
                            outline: "none",
                        }}
                        renderInput={(props) => <input {...props} />}
                    />
                    
                    <Button
                        onClick={() => setVerificationOpen(true)}
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
                        }}>
                        Submit
                    </Button>
                    
                    <Backdrop
                        sx={{ color: '#fff', backgroundColor: "#ffffffa3", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={verificationOpen}
                        onClick={handleClose}
                    >
                        <div className="verified-container">
                            <img className="verified-img" src={verified_tick} alt='tick' />
                            <h1 className="verified-heading">You have been successfully verified</h1>
                            <Link to="/assesment-interface">
                            <Button
                                variant="outlined"
                                className="help-support-btn"
                                sx={{
                                    border: "solid 1px #5C27C0",
                                    color: "#fff",
                                    background: "#5C27C0",
                                    borderRadius: "2px",
                                    width: "122px",
                                    height: "46px",
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
                    </Backdrop>

                    <div className='resend-text-container'>
                        <p className='not-recieved-text'>Not received OTP?</p>
                        <p className='resend-text'>Resend OTP</p>
                    </div>
                </div>


            </div>
        </div>
    )
}