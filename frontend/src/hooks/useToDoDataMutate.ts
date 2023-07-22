import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutateType } from "../core/toDoType";

async function postTodos(data: MutateType): AxiosPromise<[MutateType]> {
  const response = await axios.post(`http://localhost:8080/lists/${data.id}/add`, data.toDo);
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
