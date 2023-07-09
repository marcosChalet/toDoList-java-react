import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoType } from "../core/todoType";

async function postTodos(data: TodoType): AxiosPromise<[TodoType]> {
  const response = await axios.post("http://localhost:8080/todos", data);
  return response;
}

export function useTodoDataMutate() {

  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: postTodos,
    retry: 2,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['todo-data'])
    }
  });

  return mutate
}