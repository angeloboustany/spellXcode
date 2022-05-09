import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../hlogo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
            <Link to="/">
                <img src={logo} alt="spellxcode" style={{border: 'none', width:'100%', height:'100%'}} /> 
            </Link>
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#w">What?</a></p>
          <p><a href="#features">How?</a></p>
          <p><a href="#cta">Get Started</a></p>

        </div>
      </div>
      <div className="navbar-sign">
        <Link to="/login" className='authbtn'>Sign in</Link>
        <button className='authbtn' type="button" onClick={event => navigate('/register')}> 
        Sign up
        </button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#w">What?</a></p>
            <p><a href="#features">How?</a></p>
            <p><a href="#cta">Get Started</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <Link to="/login">Sign in</Link>
            <button className='authbtn' type="button" onClick={event =>  window.location.href='/register'}> 
            Sign up
            </button>          
            </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
