import { HiMiniTrash } from "react-icons/hi2";
// import { useToDoDataDelete } from "../hooks/useToDoDataDelete";
import { ToDoType } from "../core/toDoType";

export default function ToDoItem({ id, toDo }: ToDoType) {
  // const { mutate: mutateDelete } = useToDoDataDelete();

  function deletefn() {
    //mutateDelete(id ?? -1);
  }

  return (
    <div className="flex items-center justify-between px-2 text-lg w-full h-16">
      <p className="whitespace-nowrap overflow-x-hidden">{toDo}</p>
      <div className="flex items-center gap-1 ml-1">
        <button
          onClick={deletefn}
          className="text-xl text-red-600 p-1 rounded-full hover:scale-125 duration-300"
        >
          <HiMiniTrash />
        </button>
      </div>
    </div>
  );
}
