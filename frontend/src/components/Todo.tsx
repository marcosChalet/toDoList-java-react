import { HiMiniTrash } from "react-icons/hi2";
import { useToDoDataDelete } from "../hooks/useToDoDataDelete";

export default function ToDo({
  idx,
  id,
  title,
}: {
  idx: number;
  id: number;
  title: string;
}) {
  const { mutate: deleteToDo } = useToDoDataDelete();

  return (
    <div
      className={`flex items-center justify-between px-2 text-lg w-full h-16 ${
        idx % 2 == 0 ? "bg-slate-800" : "bg-slate-700"
      }`}
    >
      <p className="whitespace-nowrap overflow-x-hidden">{title}</p>
      <div className="flex items-center gap-1 ml-1">
        <button
          onClick={() => deleteToDo(id)}
          className="text-xl text-red-600 p-1 rounded-full hover:scale-125 duration-300"
        >
          <HiMiniTrash />
        </button>
      </div>
    </div>
  );
}
