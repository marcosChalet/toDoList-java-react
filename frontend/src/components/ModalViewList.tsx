import { useRef } from "react";
import { BsFillSendPlusFill } from "react-icons/bs";
import { MutateType, ToDoType } from "../core/toDoType";
import ToDo from "./ToDo";
import BaseModal from "./BaseModal";
import { ToDoListType } from "../core/toDoListType";

import { useToDoDataMutate } from '../hooks/useTodoDataMutate'

export default function ModalViewList({ toDoList }: { toDoList: ToDoListType | null}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { mutate } = useToDoDataMutate();

  function addTodo() {
    const toDo = {
      toDo: inputRef.current?.value ?? "",
    }

    const mutateToDo: MutateType = {
      id: toDoList?.id ?? -1,
      toDo,
    };

    mutate(mutateToDo);
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = "";
    }
  }

  return (
    <BaseModal>
      <>
        <h1 className="text-start w-full text-5xl mb-8 uppercase font-bold inline-block bg-gradient-to-r from-rose-600 to-violet-800 bg-clip-text text-transparent">
          To-do App
        </h1>
        <div className="bg-slate-700 rounded-md max-h-96 overflow-y-auto">
          {toDoList?.toDos?.map((toDoItem: ToDoType, idx: number) => (
            <ToDo
              key={toDoItem.id}
              idx={idx}
              id={toDoItem.id ?? -1}
              title={toDoItem.toDo}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-5 h-14">
          <input
            ref={inputRef}
            type="text"
            placeholder="digite sua nota"
            className="bg-transparent text-slate-300 w-full h-full px-2 rounded-r-none rounded-md outline-none border-dashed border-2 border-r-0 border-slate-500 text-lg"
          />
          <button
            onClick={addTodo}
            className="flex items-center justify-center w-12 h-full border-2 border-l-0 border-dashed rounded-l-none rounded-md border-slate-500 pr-2"
          >
            <BsFillSendPlusFill className="text-slate-400 text-2xl hover:scale-125 duration-300" />
          </button>
        </div>
      </>
    </BaseModal>
  );
}
