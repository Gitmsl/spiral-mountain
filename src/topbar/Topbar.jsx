import React from 'react'
import "./topbar.css"
import Logo from "../logos/SingleLogoWhite125px.png"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          <img src={Logo} alt="Spiral Mountain Logo" className="topLogo"/>
          <p>Spiral</p><p>-Mountain</p>
          {/* style more later, perhaps stack and blue/red like bk
          logo? or revert to solid white */}
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-user"></i>
        </div>
    </div>
  )
}
