import React from 'react'
import arrowRework from "../../assets/images/Group 1000005640.svg"
function Header() {
  return (
   <nav>
     <div className="header-of-assesment-interface">
          <div className="logo">
            <img src={arrowRework} alt="" />
          </div>
        </div>
        <div className="white-line"></div>
   </nav>
  )
}

export default Header