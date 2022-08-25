import React from 'react'
import getCards from '../../getCards'
import Card from '../card/Card'

const Weekly = () => {
  const cards = getCards('weekly').map((card) => {
    return (
      <Card
        key={card.id}
        s
        title={card.title}
        hours={card.hours}
        iconURL={card.iconURL}
        bgColor={card.bgColor}
      />
    )
  })

  return <>{cards}</>
}

export default Weekly
