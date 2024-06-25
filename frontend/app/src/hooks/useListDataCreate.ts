import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoListType } from "../core/toDoListType";

const apiCreateListUrl = `${import.meta.env.VITE_API_URL}/lists/create`

async function createList(data: ToDoListType): AxiosPromise<ToDoListType> {
  console.log("Log:", apiCreateListUrl)
  const response = await axios.post(apiCreateListUrl, data);
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