
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../FooterComp/FooterComp.scss'

export const FooterComp = () => {
  return (
    <div className='footer-container'>
      <div className="footer">
        <p>Don’t hesitate to contact me with any issue or just to say hi, even to join forces! I ‘ll be honored to help. <h6>josealzdz@gmail.com</h6> </p>
      </div>
      <div className="footer-right">
        <div className='links'>
         <a href='https://github.com/Lowyosh/bento-library' target='_blank' className="github"><img src="src/assets/github.png" alt="Github Logo" />The code</a>
         <a href='https://open.spotify.com/intl-es/album/5zmdoVs8pjlNgOGuRfPqOz?si=bkSxd_y2TIqnXwecMY0w0A' target='_blank' className="spotify"><img src="src/assets/spotify.png" alt="Spotify Logo" />Nice music</a>
        </div>
        <div className="byme"><p>Made entirely by me</p></div>
      </div>

    </div>
  )
}




