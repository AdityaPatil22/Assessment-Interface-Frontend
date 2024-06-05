import React from 'react'
import Footer from './Footer'
import VidioFrame from './VidioFrame'
import TextComponant from "./TextComponant";
import ProgressBar from './ProgressBar';
import "./index.scss"
function index() {
  return (
   <>
   <div className="combined-candidate-interviewr-page">
   <ProgressBar/>
   <VidioFrame/>
   <TextComponant/>
   <Footer/>
   </div>
   </>
  )
}

export default index