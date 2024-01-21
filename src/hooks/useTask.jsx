import { useContext } from "react";
import { TaskContext } from "../Contexts/TaskContent";

export default function useTask() {// С помощью этого хука сможем получить addNewCard
return useContext(TaskContext) 
}