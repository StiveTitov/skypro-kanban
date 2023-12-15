import CardsItem from "../cards/CardsItem";

export default function Column({ title, cardList }) {
  
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((cardList) => (
          <CardsItem
            key={cardList.id}
            theme={cardList.theme}
            color={cardList.color}
            title={cardList.title}
            date={cardList.date}
          />
        ))}
      </div>
    </div>
  );
}
