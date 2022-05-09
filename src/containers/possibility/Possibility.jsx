import React from 'react';
import possibilityImage from '../../assets/code.svg';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Are you ready to get started? </h4>
      <h1 className="gradient__text">Demonstrate your skills in online competitions</h1>
      <p>Become more disciplined, faster, and more efficient, and harness skills you can take with you in your career.</p>
      <h4>What are you waiting let's get Started!</h4>
    </div>
  </div>
);

export default Possibility;
