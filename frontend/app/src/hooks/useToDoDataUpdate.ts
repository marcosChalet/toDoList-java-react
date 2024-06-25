import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoType } from "../core/toDoType";

const apiUpdateTodoUrl = `${import.meta.env.VITE_API_URL}/lists/todos`

async function updateToDo(data: ToDoType): AxiosPromise<ToDoType> {
  const response = await axios.put(`${apiUpdateTodoUrl}/${data.id ?? -1}`, data);
  return response;
}

export function useToDoDataUpdate() {

  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: updateToDo,
    retry: 2,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['toDo-data'])
    }
  });

  return mutate
}
