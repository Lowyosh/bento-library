// eslint-disable-next-line no-unused-vars
import React from 'react'
import AccordionComp from '../../components/AccordionComp/AccordionComp';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export const AccordionPage = () => {

  const htmlCodeString = `export default function CardComp() {

  return (
    <div className='card'>
      <img src="https://shorturl.at/NWZ28" alt="" />
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
 
  }`

  return (
    <div>
      <div className='page'>
        <div className='header'>
          <h2>Accordion Component.</h2>
          <p>This Accordion in here can be modified with props as color, bgColor and children.
            <br />
            <br />
            You can copy the code and modify and add more props. You can also try what color desing adapts better to your needs with the color picker below.</p>
          <div>
            <h6>Aquí va el color picker para modificar el componente</h6>
          </div>
        </div>
        <div className='component'>
          <AccordionComp/>
        </div>
      </div>
      <div className="code">
        <p>Here you got the code ready to copy ⬇️</p>
        <div className="code-cols">

          <div className="jsx-code">
            <div className="jsx-code-title">
              <h5>JSX</h5>
              <h5>Copy Code</h5>
            </div>
            <SyntaxHighlighter className='code-box' language="javascript" style={stackoverflowDark} customStyle={{
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
            <SyntaxHighlighter className='code-box' language="scss" style={stackoverflowDark} customStyle={{
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
