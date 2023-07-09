import { LuEdit } from "react-icons/lu";
import { HiMiniTrash } from "react-icons/hi2";
import { useTodoDataDelete } from "../hooks/useTodoDataDelete";
import { useTodoDataUpdate } from "../hooks/useTodoDataUpdate";
import { TodoType } from "../core/todoType";

export default function Todo({
  idx,
  id,
  title,
}: {
  idx: number;
  id: number;
  title: string;
}) {
  const { mutate: mutateDelete } = useTodoDataDelete();

  function deletefn() {
    mutateDelete(id);
  }

  return (
    <div
      className={`flex items-center justify-between px-2 text-lg w-full h-16 ${
        idx % 2 == 0 ? "bg-slate-800" : "bg-slate-700"
      }`}
    >
      <p className="whitespace-nowrap overflow-x-hidden">{title}</p>
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
