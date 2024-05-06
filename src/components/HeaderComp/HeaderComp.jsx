// eslint-disable-next-line no-unused-vars
import React from 'react'
import './HeaderComp.scss'
import { NavBarComp } from '../NavBarComp/NavBarComp'

export const HeaderComp = () => {
  return (
    <div className='headerContainer'>
      <div className="titleContainer">
      <h1 className='title'>the <br /> bento library</h1>
      </div>

      <div className='rightCol'>
        <p className='description'>A React based library with some reusable components for you to use in your proyects.</p>
        <NavBarComp className='navbar'></NavBarComp>
      </div>
    </div>
  )
}
