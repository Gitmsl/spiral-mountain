import React from 'react'
import "./topbar.css"
import Logo from "../../logos/SingleLogoWhite125px.png"
import { Link } from 'react-router-dom';
// import Login from '../../pages/login/Login';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const { user } = useContext(Context); 
  return (
    <div className="top">
        <div className="topLeft">
          <img src={Logo} alt="Spiral Mountain Logo" className="topLogo"/>
          <p>Spiral-Mountain</p>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link>
            </li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
            
          </ul>
        </div>
        <div className="topRight">
        {
          user ? (
            <img 
              className='topImg'
              src='https://images.pexels.com/photos/11023371/pexels-photo-11023371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to="/login">
                LOGIN
                </Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to="/register">
                REGISTER
                </Link>
              </li>
            </ul>
          )
        }
          {/* <i className="fa-solid fa-user"></i> */}
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
