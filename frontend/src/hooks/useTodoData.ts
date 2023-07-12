import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ToDoType } from "../core/toDoType";

async function fetchToDos(): AxiosPromise<[ToDoType]> {
  const response = await axios.get("http://localhost:8080/todos");
  return response;
}

export function useToDoData() {
  const query = useQuery({
    queryFn: fetchToDos,
    queryKey: ["toDo-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}