import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutateType } from "../core/toDoType";

const apiPostListUrl = `${import.meta.env.VITE_API_URL}/lists`

async function postTodos(data: MutateType): AxiosPromise<[MutateType]> {
  const response = await axios.post(`${apiPostListUrl}/${data.id}/add`, data.toDo);
  return response;
}

export function useToDoDataMutate(title: string) {

  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: postTodos,
    retry: 2,
    mutationKey: [title],
    onSuccess: async () => {
      await queryClient.invalidateQueries(["toDo-data"])
    }
  });

  return mutate
}
