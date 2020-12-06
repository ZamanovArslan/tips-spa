import Tip from "./Tip";

function CardList(props) {
  const {cards, cardComponent} = props
  const CardComponent = cardComponent

  return (cards.map(card => <CardComponent data={card} key={card.id}/>));
}

export default CardList;