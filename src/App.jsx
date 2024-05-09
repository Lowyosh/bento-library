import './App.scss'
import './index.scss'
import './abstracts/_variables.module.scss'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeaderComp } from './components/HeaderComp/HeaderComp'

// Pages
import { HomePage } from './pages/HomePage/HomePage'
import { CardPage } from './pages/CardPage/CardPage'
import { ButtonPage } from './pages/ButtonPage/ButtonPage'
import { BadgePage } from './pages/BadgePage/BadgePage'
import { AccordionPage } from './pages/AccordionPage/AccordionPage'
import { ModalPage } from './pages/ModalPage/ModalPage'

function App() {

  return (
    <div className='appContainer'>
      <HeaderComp></HeaderComp>

      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/card' element={<CardPage/>}/>
        <Route path='/btn' element={<ButtonPage/>}/>
        <Route path='/badge' element={<BadgePage/>}/>
        <Route path='/modal' element={<ModalPage/>}/>
        <Route path='/accordion' element={<AccordionPage/>}/>
      </Routes>

      {/* TODO: Componente footer */}
      

    </div>
  )
}

export default App
