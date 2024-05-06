// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ButtonComp.scss'
import PropTypes from 'prop-types';


import vars from '../../abstracts/_variables.module.scss';


export default function ButtonComp({ children, backgroundColor, color }) {

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


