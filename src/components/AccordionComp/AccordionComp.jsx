// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './AccordionComp.scss'

export default function AccordionComp() {
  const [accordionOpen, setAccordionOpen] = useState(false)
 
  return (
    <div className='accordion-container'>
      <button className='accordion-btn' onClick={() => setAccordionOpen(!accordionOpen)}> 
        <span>This is the tittle</span>
        <span className="accordion-icon">{accordionOpen ? '-' : '+'}</span>
      </button>
      <div className={accordionOpen ? 'accordionOpen' : 'accordionClose'}>
        <div className='accordion-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusamus. Temporibus repellendus necessitatibus placeat. Itaque similique at soluta voluptate eius excepturi cumque natus quae! Esse blanditiis reprehenderit iusto atque non.</div>
      </div>
    </div>
  )
}
