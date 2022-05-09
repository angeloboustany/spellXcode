import React from 'react';
import sxc from '../../logo.svg';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer section__padding">

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={sxc} alt="sxc_logo" />
        <p>Trademark of Boustany.tech</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <Link to="/problem" class='link'>Problems</Link>
        <Link to="/contest" class='link'>Contest</Link>
        <Link to="/leaderboard" class='link'>Leaderboard</Link>
        <Link to="/calendar" class='link'>Calendar</Link>
        <Link to="/help" class='link'>Help</Link>

      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <Link to="/contact" className='link'>Contact</Link>
        <Link to="/about" className='link'>About</Link>

      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <a href='tel:0096171204311'class='link'>+961 71204311</a>
        <a href='mailto:angelo@boustany.tech' className='link'>angelo@boustany.tech</a>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2021 SpellXCode. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
