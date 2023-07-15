import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoType } from "../core/toDoType";

async function deleteToDo(id: number): AxiosPromise<ToDoType> {
  const response = await axios.delete(`http://localhost:8080/lists/delete/${id}`);
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