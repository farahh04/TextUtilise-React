import React from 'react';
import './Navbar.css'; // Adjust the path if needed
import { Link } from 'react-router-dom';


function Navbar({ title, aboutText, theme, changeTheme }) {
  // Define isWhiteText based on the theme prop
  const isWhiteText = theme === 'blue' || theme === 'green';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${isWhiteText ? 'text-white' : ''}`} to="#">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${isWhiteText ? 'text-white' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isWhiteText ? 'text-white' : ''}`} to="/about">{aboutText}</Link>
            </li>
          </ul>
         
          <div className="d-flex">
          {/* // Example for buttons inside Navbar */}
<button className="btn btn-light mx-1" onClick={() => changeTheme('light')}>Light</button>
<button className="btn btn-dark mx-1" onClick={() => changeTheme('dark')}>Dark</button>
<button className="btn btn-primary mx-1" onClick={() => changeTheme('blue')}>Blue</button>
<button className="btn btn-success mx-1" onClick={() => changeTheme('green')}>Green</button>


            {/* <button className="btn btn-light mx-1" onClick={() => changeTheme('light')}>Light</button>
            <button className="btn btn-dark mx-1" onClick={() => changeTheme('dark')}>Dark</button>
            <button className="btn btn-primary mx-1" onClick={() => changeTheme('blue')}>Blue</button>
            <button className="btn btn-success mx-1" onClick={() => changeTheme('green')}>Green</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
