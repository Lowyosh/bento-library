// eslint-disable-next-line no-unused-vars
import React from 'react'
import AccordionComp from '../../components/AccordionComp/AccordionComp';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FooterComp from '../../components/FooterComp/FooterComp';
import '../AccordionPage/AccordionPage.scss';


export const AccordionPage = () => {

  const htmlCodeString = `export default function AccordionComp({title, answer}) {
    const [accordionOpen, setAccordionOpen] = useState(false)
   
    return (
      <div className='accordion-container'>
        <button className='accordion-btn' onClick={() => setAccordionOpen(!accordionOpen)}> 
          <span>{title}</span>
          <span className="accordion-icon">{accordionOpen ? '-' : '+'}</span>
        </button>
        <div className={accordionOpen ? 'accordionOpen' : 'accordionClose'}>
          <div className='accordion-text'>{answer}</div>
        </div>
      </div>
    )
  }`

  const scssCodeString = `
  .accordion-container {
    display: flex;
    flex-direction: column;
    background-color: $lo-sat-green2;
    max-width: 250px;
    padding: .3rem;
    border-radius: $border-radius-small;
  
    & .accordion-btn {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 1rem;
      padding: .3rem;
      font-family: 'Poppins';
      transition: $smooth-transition;
      background-color: $lo-sat-green3;
      cursor: pointer;
      border: none;
      border-radius: $border-radius-small;
      
    }
  
    & .accordionOpen {
      display: grid;
      overflow: hidden;
      transition: $smooth-transition;
      justify-items: start;
  
      grid-template-rows: 1fr;
      opacity: 1;
      padding: .6rem;
    }
  
    & .accordionClose {
      display: grid;
      overflow: hidden;
      transition: $smooth-transition;
  
      grid-template-rows: 0fr;
      opacity: 0;
    }
  
    & .accordion-text {
      text-align: start;
      overflow: hidden;
    }
  
    & .accordion-icon {
      color: $bg-color-light-primary;
      font-weight: $font-weight-bold;
      flex-shrink: 0;
      margin: auto .3rem;
    }
  }`

  return (
    <div>
    <div className='page'>
      <div className='accordion-comp-container'>
        <div className="accordion-group">
          <AccordionComp title='Open me' answer='Im a functional accordion' />
          <AccordionComp title='Open me too!' answer='Yeah, for sure Im an accordion' />
          <AccordionComp title='Dont touch me' answer='I told you!!' />
        </div>
      
      </div>
      <div className='component-info'>
        <div className="info">
          <p>This component has two props: <b>Title and answer.</b> <br /><br />You can also try what color desing adapts better to your needs with the color picker below.</p>
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
