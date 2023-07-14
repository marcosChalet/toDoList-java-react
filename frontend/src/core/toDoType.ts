export type ToDoType = {
  id?: number;
  toDo: string;
};

export type MutateType = {
  id: number;
  toDo: ToDoType;
}