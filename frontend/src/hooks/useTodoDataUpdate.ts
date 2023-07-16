import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoType } from "../core/todoType";

async function updateToDo(data: TodoType): AxiosPromise<TodoType> {
  const response = await axios.put(`http://localhost:8080/todos/${data.id ?? -1}`, data);
  return response;
}

export function useToDoDataUpdate() {

  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: updateToDo,
    retry: 2,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['todo-data'])
    }
  });

  return mutate
}