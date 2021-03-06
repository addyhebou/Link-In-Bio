import './App.scss';
import ProfilePic from './Components/ProfilePic.js';
import Options from './Components/Options.js';
import SocialIcons from './Components/SocialIcons.js';
import Logo from './Icons/Saint Steph Logo.png';
import video from './Video/BACKGROUND.mp4';
import MusicVideos from './Components/MusicVideos.js';

function App() {
  let videoLink = `
  https://drive.google.com/file/d/1N5cv3Tmj1WBygjVbDJ_ASWsXKOwtxKAR/preview
  `;
  // `
  //   https://player.vimeo.com/video/555895779?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  // `;
  return (
    <div className='App'>
      <header>
        <img src={Logo} alt='Logo' width='100rem' />
        <video
          id='vid'
          loop='true'
          autoplay='autoplay'
          muted
          style={{
            position: 'fixed',
            width: '112%',
            left: '50%',
            top: '50%',
            minHeight: '100%',
            minWidth: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        >
          <source src={video} type='video/mp4' />
          {/* <iframe src="https://drive.google.com/file/d/1N5cv3Tmj1WBygjVbDJ_ASWsXKOwtxKAR/preview" width="640" height="480"></iframe> */}
        </video>
      </header>
      <main className='Main'>
        <div className='Floater'>
          <ProfilePic />
        </div>
        <Options />
        <SocialIcons />
        <MusicVideos />
      </main>
    </div>
  );
}

export default App;
