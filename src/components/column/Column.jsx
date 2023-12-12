import { tasks } from "../../data"
import CardsItem from "../cards/CardsItem"

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];
export default function Column({title}){
    return(
        <div className="main__column column">
              <div className="column__title">
                <p>{title}</p>
              </div>
              <div className="cards">
                
                    {tasks.map((task)=>(
                      <CardsItem
                        key={task.id}
                        theme={task.theme}
                        color={task.color}
                        title={task.title}
                        date={task.date}
                      />
                    ))}

                
              </div>
            </div>
            
    )
}