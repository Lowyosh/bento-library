/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './BadgeComp.scss'
import PropTypes from 'prop-types';

export const BadgeComp = ({ children, startColor, endColor }) => {

  BadgeComp.propTypes = {
    borderColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <div>
      <div
      className='BadgeComp'
      style={{ background: `linear-gradient(0deg, ${startColor} 0%, ${endColor} 100%)`,
      borderColor: endColor }}>
        {children}
      </div>
    </div>
  );
}

