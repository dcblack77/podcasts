import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`);
      setPodcasts(() => JSON.parse(response.data.contents).feed.entry);
      console.log(JSON.parse(response.data.contents));
    };
    fetchData();
  }, []);
  return (
    <div className='row align-self-end'>
      <div className='col col-3 offset-9'>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>
      {
        podcasts.map((podcast, key) => (
          <div className="card" style={{ width: '18rem' }}>
            <img src={podcast['im:image'][2].label} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{podcast['im:name'].label}</h5>
              <p className="card-text">{podcast['summary'].label}</p>
              <a href={podcast['link'].attributes.href} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Home;