import React from 'react'
import arrowRework from "../../assets/images/Group 1000005640.svg"
// import Down from "./down.svg"
import Down from "../../assets/images/down.svg"
import "./style.scss"
function Header() {
  return (
   <div>
     <nav>
     <div className="header-of-assesment-interface" >
          <div className="logo">
            <img src={arrowRework} alt="" />
          </div>
          <div className="language-dropdown" >
            <p>English(English)</p>
            <img src={Down} alt="" />
          </div>
        </div>
        <div className="white-line"></div>
    </nav>
   </div>
  )
}

export default Header