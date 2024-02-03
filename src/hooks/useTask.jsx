import { useContext } from "react";
import { TaskContext } from "../Contexts/TaskContext";

export default function useTasks() {
  // С помощью этого хука сможем получить addNewCard
  return useContext(TaskContext);
}
