import { format } from "date-fns";

import CardsItem from "../cards/CardsItem";
import { MainColumn, ColumnTitle, ColumnTitleP, Cards } from "./Column.styled";

export default function Column({ title, cardList }) {
  
  
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        {cardList.map((cardList) => (
          <CardsItem
            key={cardList._id}
            topic={cardList.topic}
            title={cardList.title}
            date={format(new Date(cardList.date), "dd.MM.yy")} // приводим дату к нужному формату 
            //с помошью подключенного модуля "date-fns"
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
