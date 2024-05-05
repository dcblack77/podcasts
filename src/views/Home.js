import React, { useState } from 'react';
import { useGetPodcasts } from '../hooks/usePodcast';

const Home = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const podcasts = useGetPodcasts(search);
  
  return (
    <div className='container align-self-end'>
      <div className='row col-3 offset-9'>
        <div className="input-group">
          <input type="text" onChange={handleSearch} className="form-control col" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
        </div>
      </div>
      <div className='row'>
      {
        podcasts.data &&
        podcasts.data.map((podcast, _key) => (
          <a href={`/podcast/${podcast.id.attributes['im:id']}`} className="card mx-2 mt-2" style={{ width: '25em' }}>
            <div key={podcast.id.attributes['im:id']}>
              <img src={podcast['im:image'][2].label} className="card-img-top rounded-circle p-5" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{podcast['im:name'].label}</h5>
                <p className="card-text"> Author: {podcast['im:artist'].label}</p>
              </div>
            </div>
          </a>
        ))
      }
      </div>
    </div>
  );
};

export default Home;