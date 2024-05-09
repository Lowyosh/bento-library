// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ButtonPage.scss'
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import vars from '../../abstracts/_variables.module.scss';
import FooterComp from '../../components/FooterComp/FooterComp';

export const ButtonPage = () => {


  const jsxCodeString = `export default function ButtonComp({ children, backgroundColor, color }) {

    ButtonComp.propTypes = {
      // vars: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    };
  
    return (
      <div>
        <button
          style={{ 
            backgroundColor: backgroundColor ? backgroundColor : vars.bgColorDarkPrimary,
            color: color ? color : vars.textColorLightPrimary,
          }}
        className='btn'>
          {children}
        </button>
      </div>
    )
  }
  `

  const scssCodeString = `.btn {
    border-style: none;
    font-size: $font-size-medium;
    padding: .5rem 1.5rem;
    margin: auto;
    color:  $text-color-light-primary;
    border: solid 1px $text-color-light-secondary;
    border-radius: $border-radius-small;
    transition: $smooth-transition;
    background-color: $bg-color-dark-primary;
    box-shadow:  6px 6px 5px #161616,
    -6px -6px 10px #404040;
  
    &:hover {
      color: $mustard;
      border: solid 1px $color-grey;
      box-shadow: none;
      background-color: $bg-color-dark-secondary;
    }
  }
  `

  return (
    <div>
    <div className='page'>
      <div className='btn-container'>
      <ButtonComp
        className='btn-page'
        backgroundColor={vars.hiSatGreen3}
        color={vars.textColorPrimary}
          >A nice Button!
        </ButtonComp> 
      </div>
      <div className='component-info'>
        <div className="info">
          <p>This component has three props: <b>Children, backgroundColor and color</b> <br /><br />You can also try what color desing adapts better to your needs with the color picker below.</p>
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
</div>
)

}
