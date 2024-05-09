// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ButtonComp.scss'
import PropTypes from 'prop-types';


import vars from '../../abstracts/_variables.module.scss';


export default function ButtonComp({ children, backgroundColor, color, buttonProps }) {

  ButtonComp.propTypes = {
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    buttonProps: PropTypes.bool
  };

  return (
    <div>
      <button
        className='btn'
        style={{ 
          backgroundColor: backgroundColor ? backgroundColor : vars.bgColorDarkPrimary,
          color: color ? color : vars.textColorLightPrimary }} {...buttonProps}>
        {children}
      </button>
    </div>
  )
}


