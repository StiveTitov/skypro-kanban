import { statusList } from "../../data"; //получаем название колонок из файла
import Column from "../column/Column";

export default function Main({ cards }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)} //фильтруем данные, чтобы карточка
              /> //соответствовала своей колонке
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
