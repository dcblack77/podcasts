import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const { id } = useParams();
  return (
    <div>
      <div className='container'>
        { id }
      </div>
    </div>
  );
};

export default About;