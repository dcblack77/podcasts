import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Podcast Details</h1>
      <p>This is the {slug} Details.</p>
    </div>
  );
};

export default About;