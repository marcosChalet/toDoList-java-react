import { ToDoType } from "./toDoType";

export type ToDoListType = {
  id?: number;
  title: string;
  toDoType: number;
  tags: string[];
  toDos: ToDoType[];
};