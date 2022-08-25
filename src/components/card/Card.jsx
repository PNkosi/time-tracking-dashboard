import React from 'react'
import ellipsis from '../../assets/icon-ellipsis.svg'
import './card.css'

const Card = (props) => {
  return (
    <div className={`card border-rounded ${props.bgColor}`}>
      <img className='card__icon' src={props.iconURL} alt='card icon' />
      <div className='card__information border-rounded py-2 px-1'>
        <div className='card__header'>
          <h3 className='card__title'>{props.title}</h3>
          <img src={ellipsis} alt='work menu toggle' />
        </div>
        <div className='card__body'>
          <h1 className='current-hours'>{props.hours.current}hrs</h1>
          <p className='previous-hours'>
            Last Week - {props.hours.previous}hrs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
