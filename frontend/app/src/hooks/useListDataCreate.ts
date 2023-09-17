import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoListType } from "../core/toDoListType";

async function createList(data: ToDoListType): AxiosPromise<ToDoListType> {
  const response = await axios.post("http://localhost:8080/lists/create", data);
  return response;
}

export function useToDoCreateList(title: string) {
    const queryClient = useQueryClient()
    const mutate = useMutation({
      mutationFn: createList,
      retry: 2,
      onSuccess: async () => {
        await queryClient.invalidateQueries(["toDo-data"])
      }
    });
  
    return mutate
}