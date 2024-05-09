// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';

import './ModalPage.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FooterComp from '../../components/FooterComp/FooterComp';
// eslint-disable-next-line no-unused-vars
import ModalComp from '../../components/ModalComp/ModalComp';

import vars from '../../abstracts/_variables.module.scss';


export const ModalPage = () => {

  const htmlCodeString = `export default function CardComp() {

  return (
    <div className='card'>
      <img src="https://shorturl.at/NWZ28" alt="" />
      <div className='info'>
        <h3>Your title here</h3>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className='btn-card'>
          <ButtonComp
            backgroundColor={vars.bgColorDarkSecondary}
            color={vars.textColorLightPrimary}
          >Click here for more info!
          </ButtonComp>
        </div>
      </div>
    </div>
  )
}`

  const scssCodeString = `
  .card {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    margin: auto;
    object-fit: contain;
    border-radius: $border-radius-large;
    backdrop-filter: blur(10px);
    color: $text-color-dark-primary;
    border: 1px solid $bg-color-light-primary;
    background-color: $bg-color-dark-primary;
  
    & img {
      object-fit: cover;
      border-radius: inherit;
      box-shadow: 0px 4px 12px $black;
      transition: $smooth-transition;
  
      &:hover {
        box-shadow: 0px 2px 2px $black;
      }
    }
  
    & h3 {
      color: $bg-color-light-primary;
      margin: 1.5rem;
      font-size: $font-size-medium;
      text-align: start;
    }
  
    & p {
      color: $bg-color-light-primary;
      margin: 0 1.5rem;
      text-align: start;
  
    }
  
    & .info {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  
    & .btn-card {
      margin: 1.5rem;
    }
    
  }`

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => { setShowModal(!showModal) };
  
  return (
    <div>
    <div className='modal-page'>
    <div className='modal'>{showModal ? <ModalComp closeModal={setShowModal} /> : console.log('NOTclicked')}</div>
    <div className='modal-onoff'>{showModal ? <div className='modal-bg'></div> : null}</div>
    
      <div className='modal-container'>
          {showModal ? null : <button onClick={handleClick} className='btn-modal' style={{backgroundColor: vars.hiSatPurple2}}>Show modal</button>}
           
      </div>
      <div className='component-info'>
        <div className="info">
          <p>This component has no props, but you can copy and edit it.<br /><br />You can also try what color desing adapts better to your needs with the color picker below.</p>
        </div>
        <div className='color-picker'>
          <img src="src/assets/colorpicker.svg" alt="color picker" />
        </div>
      </div>
    </div>
      <div className="code">
      <div className="break">
        <p>Copy the code here ⬇️</p>
      </div>
        <div className="code-cols">

          <div className="jsx-code">
            <div className="jsx-code-title">
              <h5>JSX</h5>
              <h5>Copy Code</h5>
            </div>
            <SyntaxHighlighter className='code-box' language="javascript" style={qtcreatorLight} customStyle={{
              padding: '3rem',
              margin: '0',
              textAlign: 'start',
              overflow: 'none',}}
              wrapLongLines='true'>
                {htmlCodeString}
            </SyntaxHighlighter>
          </div>

          <div className="scss-code">
            <div className="scss-code-title">
              <h5>SCSS</h5>
              <h5>Copy Code</h5>
            </div>
            <SyntaxHighlighter className='code-box' language="scss" style={qtcreatorLight} customStyle={{
              padding: '3rem',
              margin: '0',
              textAlign: 'start',
              overflow: 'none',}}
              wrapLongLines='true'>
                {scssCodeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <FooterComp></FooterComp>
    </div>
  )
}
