import data from './data'

const getCards = (timeframeRequested) => {
  let counter = 1
  const cards = data.map((item) => {
    if (item.timeframes[timeframeRequested]) {
      const title = item.title.toLowerCase().replace(' ', '-')
      return {
        id: counter++,
        title: item.title,
        hours: item.timeframes[timeframeRequested],
        iconURL: `/src/assets/icon-${title}.svg`,
        bgColor: `${title}-card-bg`,
      }
    }
  })
  return cards
}

export default getCards
