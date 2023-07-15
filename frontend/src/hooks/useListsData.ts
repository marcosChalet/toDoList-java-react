import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ToDoListType } from "../core/toDoListType";

async function fetchToDos(): AxiosPromise<[ToDoListType]> {
  const response = await axios.get("http://localhost:8080/lists");
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