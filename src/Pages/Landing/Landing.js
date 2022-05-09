import React from 'react';

import {Possibility, Features, What, Header } from '../../containers';
import { CTA, Navbar } from '../../components';

import './Landing.css';

const Landing = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <What />
    <Features />
    <Possibility />
    <CTA />
  </div>
);

export default Landing;
