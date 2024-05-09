
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../FooterComp/FooterComp.scss'

export default function FooterComp() {
  return (
    <div className='footer-container'>
      <div className="footer">
        <p>Don’t hesitate to contact me with any issue or just to say hi, even to join forces! I ‘ll be honored to help. <b>josealzdz@gmail.com</b> </p>
      </div>
      <div className="footer-right">
        <div className='links'>
         <a href='https://github.com/Lowyosh/bento-library' target='_blank' className="github"><img className='github-img' src="src/assets/github.png" alt="Github Logo" />The code</a>
         <a href='https://open.spotify.com/intl-es/album/5zmdoVs8pjlNgOGuRfPqOz?si=bkSxd_y2TIqnXwecMY0w0A' target='_blank' className="spotify"><img className='spotify-img' src="src/assets/spotify.png" alt="Spotify Logo" />Nice music</a>
        </div>
        <div className="byme"><p>Made entirely by me with </p> <img src="src/assets/figma.png" alt="Figma Logo"/> <p>and</p> <img src="src/assets/vscode.png" alt="Visual Studio Code Logo" /> </div>
      </div>

    </div>
  )
}




