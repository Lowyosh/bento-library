// eslint-disable-next-line no-unused-vars
import React from 'react'
import './CardComp.scss'
import ButtonComp from '../ButtonComp/ButtonComp'
import PropTypes from 'prop-types';

import vars from '../../abstracts/_variables.module.scss';

ButtonComp.propTypes = {
  // vars: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function CardComp() {
  return (
    <div className='card'>
      <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png" alt="" />
      <div className='info'>
        <h3>This is a Card!</h3>
        <p>To display info or just images </p>
        <div className='btn-card'>
          <ButtonComp
            backgroundColor={vars.loSatPurple3}
            color={vars.textColorLightPrimary}
          >Click here
          </ButtonComp>
        </div>
      </div>
    </div>
  )
}

