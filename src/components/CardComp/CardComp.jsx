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
      <img src="https://www.nbrii.com/img/bigstock-Large-group-of-people-Seamles-81251573_hud7da111a79594b81a0dd0d39b9a8de14_6993880_840x345_fill_q75_h2_box_center.webp" alt="" />
      <div className='info'>
        <h3>Your title here</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem officia quam et commodi! Nihil non nemo quia nam distinctio amet? Quod asperiores debitis nihil, temporibus deserunt optio mollitia officia esse!</p>
        <div className='btn-card'>
          <ButtonComp
            backgroundColor={vars.bgColorDarkSecondary}
            color={vars.textColorLightPrimary}
          >Click here for more info!
          </ButtonComp>
        </div>
      </div>
    </div>
  )
}

