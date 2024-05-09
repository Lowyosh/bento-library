// eslint-disable-next-line no-unused-vars
import React from 'react'
import AccordionComp from '../../components/AccordionComp/AccordionComp'
import { BadgeComp } from '../../components/BadgeComp/BadgeComp'
import ButtonComp from '../../components/ButtonComp/ButtonComp'
import CardComp from '../../components/CardComp/CardComp'
import FooterComp from '../../components/FooterComp/FooterComp'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './HomePage.scss'
import vars from '../../abstracts/_variables.module.scss'


export const HomePage = () => {

  const jsxCodeString = `
  export const CodeForYou = ({ Modify, copyIT, loveIT }) => {
    return (
      <div>
        <div
          className='whatAComponent!'
          style={{ background: veryNiceColor,
          borderColor: anotherNiceColor }}>
          {children}
        </div>
      </div>
    );
  }
  `

  const scssCodeString = `.whatAComponent {
    font-weight: $font-weight-bold;
    transition: $smooth-transition;
    padding: .5rem 1.5rem;
    
    &:hover {
      opacity: .8;

    }
 }
  `

  return (
    <>
      <div className="container">
        <div className="section1">
          <div className="comp-container">
            <div className="group-1">
              <div className="btns-home">
                <ButtonComp
              className='btn-home'
              backgroundColor={vars.hiSatPurple3}
              color={vars.textColorLightPrimary}
              >Buttons</ButtonComp>
              <ButtonComp
              className='btn-home'
              backgroundColor={vars.hiSatGreen4}
              color={vars.textColorLightPrimary}
              >Buttons</ButtonComp>
              </div>
              
              <div className='accordion-home'>
              <AccordionComp title='Accordions' answer='beautiful accordions'></AccordionComp>
              <AccordionComp title='Customizable' answer='and responsive'></AccordionComp>
             </div>

             <div className="badges-comp">
              <BadgeComp  className='badge-home' startColor={vars.hiSatPurple4} endColor={vars.hiSatPurple1}>Choose a color</BadgeComp>
              <BadgeComp  className='badge-home' startColor={vars.loSatGreen4} endColor={vars.hiSatPurple3}>Style your badge</BadgeComp>
              <BadgeComp  className='badge-home' startColor={vars.bgColorDarkPrimary} endColor={vars.hiSatGreen3}>Make it yours</BadgeComp>
             </div>
            </div>
            <div className="group-2">
              <div className='card-home'>
               <CardComp className='card-home'></CardComp>
              </div>
            </div>  
             
          </div>
          <div className="makeityours"><p> copy it <br /> modify it, <br /> make it <br />yours </p></div>
        </div>
        <div className="section2">
          <div className="instructions">Copy the JSX code and SCSS file to adapt it to your needs and use the variables module to modify the global look. <br /><br />You can also download the variables module to use them in your projects. </div>
          <div className="logos">
            <div className="sassLogo"><img src="src/assets/sass.png" alt="Sass Logo" /></div>
            <div className="reactLogo"><img src="src/assets/react.png" alt="React Logo" /></div>
          </div>
          <div className="colorPicker"><img src="src/assets/colorpicker.svg" alt="Color picker" /></div>
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
                {jsxCodeString}
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
    </>
  )
}
