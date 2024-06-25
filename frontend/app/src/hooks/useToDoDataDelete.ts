import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoType } from "../core/toDoType";

const apiDeleteTodoUrl = `${import.meta.env.VITE_API_URL}/lists/todo/delete`

async function deleteToDo(id: number): AxiosPromise<ToDoType> {
  const response = await axios.delete(`${apiDeleteTodoUrl}/${id}`);
  return response;
}

export function useToDoDataDelete() {

  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: deleteToDo,
    retry: 2,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['toDo-data'])
    }
  });

  return mutate;
}
