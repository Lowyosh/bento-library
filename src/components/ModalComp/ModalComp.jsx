// eslint-disable-next-line no-unused-vars
import React from 'react'

import vars from '../../abstracts/_variables.module.scss';
import '../ModalComp/ModalComp.scss'

// eslint-disable-next-line react/prop-types
export default function ModalComp ({closeModal}) {
  return (
      <>
      
      <div className='modal-window'>
        <div className='close-btn'><button  onClick={() => closeModal(false)}>x</button></div>
        <h3 className='modal-title'>This is a nice Modal window</h3>
        <div className="modal-info">You can use it for messages, information, or prompts. </div>
        <div className="modal-buttons">
        <button
        onClick={() => closeModal(false)}
        className='btn-in-modal'
        style={{backgroundColor: vars.hiSatPurple2}}
          >Cancel
        </button> 
        <button
        onClick={() => closeModal(false)}
        className='btn-in-modal'
          >Continue
        </button> 
        </div>
      </div>

      </>
  )
}
