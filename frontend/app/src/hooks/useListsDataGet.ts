import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ToDoListType } from "../core/toDoListType";

const apiFetchTodoUrl = `${import.meta.env.VITE_API_URL}/lists`

async function fetchToDos(): AxiosPromise<[ToDoListType]> {
  const response = await axios.get(apiFetchTodoUrl);
  return response;
}

export function useToDoDataGet() {
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