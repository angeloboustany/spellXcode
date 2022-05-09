import React, {useEffect, useState} from 'react';
import logo from '../../hlogo.svg';
import './hnavbar.css';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Auth } from '../../Pages';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


const Hnavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [logout, setLogout] = useState(false);
    let navigate = useNavigate();
    const cookies = new Cookies();
    const userlogo = cookies.get('user').pp;

    useEffect(() => {
        if (logout) {
            sessionStorage.clear();
            // clear cookies from browser
            document.cookie.split(";").forEach(function(c) {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            });
            Auth.logout(() => {
              window.location.href = '/';
              //navigate('/');
            }
            );
        }
    }, [logout, navigate]);

    return (
        <div className="hnavbar">
          <div className="navbar-links">
            <div className="navbar-links_logo">
            <Link to="/home">
                <img src={logo} alt="spellxcode" style={{border: 'none', width:'100%', height:'100%'}} /> 
            </Link>
            </div>
            <ul className="navbar-links_container">
                <li>
                    <Link to="/problem" className='nav-problem'> Problems </Link>
                </li>
    
                <li>
                    <Link to="/leaderboard" className='nav-user'> Leaderboard </Link> 
                </li>
                <li>
                    <Link to="/contest" className='nav-contest'> Contests </Link>
                </li>
            </ul>
          </div>
          <div className="navbar-sign">
            <img src={userlogo} alt="" id='userPP' />
            <button className='authbtn' type="button" onClick={() => setLogout(true)}> 
             Logout
            </button>
          </div>
          <div className="navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <ul className="navbar-menu_container-links">
                <li>
                    <Link to="/problem" className='nav-problem'> Problems </Link>
                </li>
    
                <li>
                    <Link to="/leaderboard" className='nav-user'> Leaderboard </Link> 
                </li>
                <li>
                    <Link to="/contest" className='nav-contest'> Contests </Link>
                </li>
            </ul>
              <div className="navbar-menu_container-links-sign">
                <button className='authbtn' type="button" onClick={() => setLogout(true)}> 
                Logout
                </button>          
                </div>
            </div>
            )}
          </div>
        </div>
      );
    };
    
    export default Hnavbar;