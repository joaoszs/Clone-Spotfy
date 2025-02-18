import 'react';
import LogoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
        <img src= {LogoSpotify} alt="logo do spotify" />
        <a href="/" className='item-list__link'>
            <h1>Spotify</h1>
        </a>
    </div>
  )
}

export default Header