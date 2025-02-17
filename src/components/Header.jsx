import 'react';
import LogoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="Header">
        <img src= {LogoSpotify} alt="logo do spotify" />

        <a href="/" className='Header__Link'>
            <h1>Spotify</h1>
        </a>
    </div>
  )
}

export default Header