import React from 'react';
import Videos from '../Data/MusicVideos.json';

export default function MusicVideos() {
  return (
    <div>
      <h1>Music Videos</h1>
      <div className='videos'>
        {Object.entries(Videos).map(([title, song]) => {
          return (
            <div className='video'>
              <h2>{title}</h2>
              <h3>{song['Artist Name']}</h3>
              <iframe width='420' height='315' src={song['Link']}></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
