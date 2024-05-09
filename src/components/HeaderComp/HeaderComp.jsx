// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderComp.scss'
import { NavBarComp } from '../NavBarComp/NavBarComp'

export const HeaderComp = () => {
  return (
    <div className='headerContainer'>
      <Link className='titleContainer' to="/">
        <h1 className='title'>the <br /> bento library</h1>
      </Link>
      
      
      

      <div className='rightCol'>
        <p className='description'>A React based library with some reusable components for you to use in your proyects.</p>
        <NavBarComp className='navbar'></NavBarComp>
      </div>
    </div>
  )
}
