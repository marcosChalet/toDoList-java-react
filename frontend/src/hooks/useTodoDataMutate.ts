import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoType } from "../core/toDoType";

async function postTodos(data: ToDoType): AxiosPromise<[ToDoType]> {
  const response = await axios.post("http://localhost:8080/todos", data);
  return response;
}

export function useToDoDataMutate() {

  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: postTodos,
    retry: 2,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['toDo-data'])
    }
  });

  return mutate
}