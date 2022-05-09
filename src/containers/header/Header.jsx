import React from 'react';
import brain from '../../assets/binary.svg';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Matching Developers With Magic</h1>
      <p>Diving into the magical world of Wizzards and Witches, helping Developers unleash their full potentiel through casting code, aquiring skills in their Grimoire, through Contest, Problem solving and much more ...</p>
    </div>
      <div className="header-image">
        <img src={brain} alt="svg" />
      </div>
  </div>
);

export default Header;
