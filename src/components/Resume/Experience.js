import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
	 <div className="link-to" id="experience" />
    <div className="title">
      <h3>License & Certifications</h3>
	  <a href="https://www.credly.com/badges/7f0a3c1b-4022-4786-8d97-2d0e61dbf50e/public_url" target="_blank" style={{border: "white"}}>
	  <img src="https://images.credly.com/size/150x150/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"/>
	 </a>
    </div>

  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
