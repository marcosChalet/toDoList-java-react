import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoType } from "../core/todoType";

async function deleteTodo(id: number): AxiosPromise<TodoType> {
  const response = await axios.delete(`http://localhost:8080/todos/${id}`);
  return response;
}

export function useTodoDataDelete() {

  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: deleteTodo,
    retry: 2,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['todo-data'])
    }
  });

  return mutate
}