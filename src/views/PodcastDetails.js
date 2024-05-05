import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPodcast } from '../hooks/usePodcast';

const About = () => {
  const { id } = useParams();
  const podcast = useGetPodcast(id);
  return (
    <div>
      {
        podcast.data && <div className='container'>
        <div className='row col-3'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={podcast.data.artworkUrl100} className="card-img-top rounded" alt={podcast.data.collectionName}/>
            <ul class="list-group list-group-flush">
              <li className="list-group-item"><p className="card-text fw-bold">{podcast.data.collectionName}</p>
              <p className="card-text fst-italic">by: {podcast.data.artistName}</p></li>
              <li className="list-group-item">
                <p className='card-text-justify fw-bold'>Description:</p>
                <p className='card-text fst-italic'>{podcast.data.description}</p>
              </li>
            </ul>
          </div>
        </div>
        { id }
      </div>
      }
    </div>
  );
};

export default About;