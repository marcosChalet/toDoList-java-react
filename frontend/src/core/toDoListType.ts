import { ToDoType } from "./toDoType";

export interface TagType {
  id: number,
  name: string,
}

export type ToDoListType = {
  id?: number;
  title: string;
  toDoType: number;
  tags: TagType[];
  toDos: ToDoType[];
};