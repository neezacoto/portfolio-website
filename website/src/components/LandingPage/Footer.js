import React from 'react';
import './styles/footer.scss';

function Footer() {
	return (
		<div className='footer-container'>
			<p>© {new Date().getFullYear()} Christian Rudder</p>
			<a href="https://github.com/neezacoto/portfolio-website" target="_blank" rel="noopener noreferrer">view source code</a>   
		</div>
	);
}

export default Footer;
