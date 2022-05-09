import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Notable competitions',
    text: 'International Collegiate Programming Contest (ICPC), International Olympiad in Informatics (IOI), American Computer Science League (ACSL), Facebook Hacker Cup, Google Code Jam',
  },
  {
    title: 'How it works',
    text: 'Judging is based mostly upon number of problems solved and time spent for writing successful solutions, but may also include other factors (quality of output produced, execution time, memory usage, program size, etc.).',
  },
  {
    title: 'Computer programs',
    text: 'You will be writing command-line programs, not fancy GUIs or web applications,that solve the given problem.',
  },
  {
    title: 'Scoring',
    text: 'The results are judged on the number of questions solved, time spent solving the problems, and other factors, like execution time, program size, etc.',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">These competitions have been around since the 1970s, and interest in the events has grown significantly over the years</h1>
      <p>Join now to start practicing your skills</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
