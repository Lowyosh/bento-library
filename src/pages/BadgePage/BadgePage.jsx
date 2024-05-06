// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BadgeComp } from '../../components/BadgeComp/BadgeComp';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import vars from '../../abstracts/_variables.module.scss';

export const BadgePage = () => {

  const jsxCodeString = `export const BadgeComp = ({ children, startColor, endColor }) => {

    BadgeComp.propTypes = {
      borderColor: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    };
  
    return (
      <div>
        <div
        className='BadgeComp'
        style={{ background: linear-gradient(0deg, {startColor} 0%, {endColor} 100%),
        borderColor: endColor }}>
          {children}
        </div>
      </div>
    );
  }`


  const scssCodeString = `.BadgeComp {
    max-width: 200px;
    margin: auto;
    margin-bottom: 1rem;
    font-weight: $font-weight-bold;
    transition: $smooth-transition;
    padding: .5rem 1.5rem;
    border-radius: $border-radius-xlarge;
    border: solid 1px $lime;
    background-color: $bg-color-dark-primary;
    background: linear-gradient(0deg, $bg-color-dark-primary 0%, $lime 100%);
  
  
    &:hover {
      opacity: .8;
    }
  }`

  return (
    <div>
      <div className='page'>
      <div className='component'>
          <BadgeComp className='badge-comp' startColor={vars.bgColorDarkPrimary} endColor={vars.blueDark}>Thats a Badge!</BadgeComp>
          <BadgeComp className='badge-comp' startColor={vars.bgColorDarkPrimary} endColor={vars.lime}>Thats another Badge!</BadgeComp>
          <BadgeComp className='badge-comp' startColor={vars.red} endColor={vars.mustard}>And another one!</BadgeComp>
      </div>
      <div className='component-info'>
        <div className="info">
          <p>This component has this props: (Children, backgroundColor and color)<br /><br />You can also try what color desing adapts better to your needs with the color picker below.</p>
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
    </div>
  )
}