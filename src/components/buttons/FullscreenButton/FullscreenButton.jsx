import React, {useState} from 'react';

const FullscreenButton = (props) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
  
    const toggleFullscreen = () => {
      if (!isFullscreen) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      } else {
  
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    };
  
    return (
      <li className="nav-item">
        <a className="icon-button" onClick={toggleFullscreen}>
          {props.icon}
        </a>
      </li>
    );
  };

  export default FullscreenButton;