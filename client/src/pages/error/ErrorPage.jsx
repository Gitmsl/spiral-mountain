import React from 'react';
import '../error/errorPage.css';

export default function ErrorPage() {
	return (
		<div id="errorPage">
			<h1 className="errorPageTitle">Oops!</h1>
			<p className="errorPageText">Page not found.</p>
		</div>
	);
}