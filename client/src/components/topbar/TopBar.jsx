import React from 'react';
import './topbar.css';
import Logo from '../../logos/SingleLogoWhite125px.png';
import { Link } from 'react-router-dom';
// import Login from '../../pages/login/Login';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
	const { user, dispatch } = useContext(Context);
  
	const handleLogout = () =>{
		dispatch({ type:'logout' });
	};

	const displayUsername = () => {
		console.log({username: user.username});
		return (
			<p className='usernameText'>{user.username}</p>
		);
	};
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
					<li className="topListItem" onClick={handleLogout}>
						{user && 'LOGOUT'}
					</li>
            
				</ul>
			</div>
			<div className="topRight">
				{
					user ? (
						<div className='userNameIconContainer'>
							{displayUsername()}
							{/* <p className='usernameIcon'>Username goes here</p> */}
							<img 
								className='topImg'
								src={user.profilePic}
								alt=''
							/>
						</div>
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
	);
}
