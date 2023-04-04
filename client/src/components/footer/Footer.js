import React from 'react';
import './footer.css';

export default function Footer() {
	return(
		<div className="footerContainer">
			<p className='footerText'>
            Built with React by Michael LoCascio, 2023
			</p>
			<a 
				className="footerGithubLink" 
				href="https://github.com/Gitmsl/spiral-mountain"
				target="_blank"
				rel="noreferrer"
				alt="link to Spiral-Mountain Github repository">
				<i className="fa-brands fa-github"></i>
			</a> 
		</div>
	);
}