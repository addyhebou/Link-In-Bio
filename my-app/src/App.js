import './App.css';
import ProfilePic from "./Components/ProfilePic.js";
import Options from "./Components/Options.js";
import SocialIcons from "./Components/SocialIcons.js";
import Logo from "./Icons/Saint Steph Logo.png";
import video from "./Video/BACKGROUND.mp4";

function App() {
  return (
    <div className="App">
      <header>
        <img src = {Logo} alt = "Logo" width = "100rem"/>
        <video id = "vid" loop= "true" autoplay= "autoplay" muted 
          style = {{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
          >
          <source src = {video} type = "video/mp4"/>
        </video>
      </header>
      <main className = "Main">
        <ProfilePic />
        <Options />
        <SocialIcons />
      </main>

    </div>
  );
}
// {
//   const video = document.getElementById('vid');
//   if (true) video.play();
// }


export default App;
