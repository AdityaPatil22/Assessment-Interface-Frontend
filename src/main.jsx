import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AssessmentWelcomePage from "./pages/AssessmentWelcomePage/index.jsx";
import AseesmentInterviewPage from "./pages/AssesmentInterviewPage/index.jsx"
import FaceDetectionPage from "./pages/FaceDetection/index.jsx";
import SystemCheck1 from "./pages/SystemCheck1/index.jsx";
import SystemCheck2 from "./pages/SystemCheck2/index.jsx";
import Instruction from "./pages/AssesmentInterFace/Instruction.jsx";
import CandidateVerificationAdhaar from './pages/CandidateVerificationAdhaar/index.jsx'
import CandidateVerificationEnterOtp from './pages/CandidateVerificationEnterOtp/index.jsx'
import CandidateVerificationIncorrectOtp from './pages/CandidateVerificationIncorrectOtp/index.jsx'
import InterviewDonePage from "./pages/InterviewDone/index.jsx";
import Root from './Root.jsx';

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: "14px !important",
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <AssessmentWelcomePage />},
      {
        path:"assesment-interface",
        element:<Instruction/>
      },
      {
        path:"assesment-interface-interview",
        element:<AseesmentInterviewPage/>
      },
      {
        path:"InterviewDonePage",
        element:<InterviewDonePage/>
      },
      {
        path: "candidate-verification-adhaar",
        element: <CandidateVerificationAdhaar />
      },
      {
        path: "candidate-verification-enter-otp",
        element: <CandidateVerificationEnterOtp />
      },
      {
        path: "candidate-verification-incorrect-otp",
        element: <CandidateVerificationIncorrectOtp />
      },
      {
        path: "system-check-1",
        element: <SystemCheck1 />,
      },
      {
        path: "system-check-2",
        element: <SystemCheck2 />,
      },
      {
        path: "face-detection",
        element: <FaceDetectionPage/>
      },
    ]
  }
  
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
