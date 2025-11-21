import './Header.css';
import React, { useState } from 'react';
function Header(){
    // 1. Create a state variable to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Create a function to toggle the state
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Flips the state from true to false, or false to true
  };
    return(
        <>
        <div className='header'>
            <div className='cont-one'>
            <div className='header-logo'></div>
            <a href='/'>Utsav Prakash</a></div>
            <div className={`cont-two ${isMenuOpen ? 'open' : ''}`}>
            <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="#project-section">PROJECTS</a></li>
            <li><a href="#certificate-section">CERTIFICATIONS</a></li>
            <li><a href="#education-section">EDUCATION</a></li>
            </ul>
            </div>
            <button className="hamburger" onClick={handleMenuToggle}>{isMenuOpen ? <>&times;</> : <>&#9776;</>}</button>
        </div>
        </>
    )
}
export default Header