import React from 'react';
import Feature from '../../components/feature/Feature';
import './what.css';

const What = () => (
  <div className="what section__margin" id="w">
    <div className="what-feature">
      <Feature title="What is SpellXCode" text="We are a online competitive programming platform that let's participants, called sport programmers, solve specific problems, join contest, attend events and learn the art of thinking, using logic-based creativity to solve a problem from different angles." />
    </div>
    <div className="what-heading">
      <h1 className="gradient__text">Competitive programming is a mind sport</h1>
      <a href='#cta'>Join us now</a>
    </div>
    <div className="what-container">
      <Feature title="What" text="Competitive programming is a sport, perhaps even a form of art. It’s an activity that requires creativity and analytical thinking to tackle difficult coding problems." />
      <Feature title="How" text="Judging, usually done by host machines, is usually based on the number of problems solved under a time constraint. The goal is to write source code that solves a given logical or mathematical problem" />
      <Feature title="Why" text="A lot of big companies like Google, Facebook. Microsoft, Amazon hires through competitive programming, so it will help you gain advantage over others." />
    </div>
  </div>
);

export default What;
