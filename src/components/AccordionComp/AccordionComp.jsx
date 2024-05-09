/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './AccordionComp.scss'

export default function AccordionComp({title, answer}) {
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
}
