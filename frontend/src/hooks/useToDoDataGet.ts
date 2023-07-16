import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { TodoType } from "../core/todoType";

async function fetchToDos(): AxiosPromise<[TodoType]> {
  const response = await axios.get("http://localhost:8080/todos");
  return response;
}

export function useToDoDataGet() {
  const query = useQuery({
    queryFn: fetchToDos,
    queryKey: ["todo-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}