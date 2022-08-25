import React from 'react'
import getCards from '../../getCards'
import Card from '../card/Card'

const Monthly = () => {
  const cards = getCards('monthly').map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        hours={card.hours}
        iconURL={card.iconURL}
        bgColor={card.bgColor}
      />
    )
  })

  return <>{cards}</>
}

export default Monthly
