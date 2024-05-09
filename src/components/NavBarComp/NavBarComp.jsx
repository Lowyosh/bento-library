// eslint-disable-next-line no-unused-vars
import React from 'react'
import './NavBarComp.scss'
import { Link } from 'react-router-dom'

export const NavBarComp = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/btn">Button</Link></li>
          <li><Link to="/badge">Badge</Link></li>
          <li><Link to="/Card">Card</Link></li>
          <li><Link to="/modal">Modal</Link></li>
          <li><Link to="/accordion">Accordion</Link></li>
        </ul>
      </nav>
    </div>
  )
}
