import { BsThreeDots } from "react-icons/bs";
import { TagType, ToDoListType } from "../core/toDoListType";

export default function ToDoList({
  toDoList,
  selectList,
}: {
  toDoList: ToDoListType;
  selectList: (item: ToDoListType) => void;
}) {
  return (
    <div
      onClick={() => selectList(toDoList)}
      key={toDoList.id}
      className="overflow-hidden relative px-3 bg-slate-800 rounded-md w-72 h-48 flex justify-center items-center duration-200 hover:translate-x-1 hover:translate-y-2 hover:cursor-crosshair"
    >
      <div className="absolute p-1 right-2 top-1 text-2xl text-slate-400 hover:cursor-pointer">
        <BsThreeDots />
      </div>
      <div
        className={`absolute top-2 left-2 animate-pulse rounded-full w-2 h-2 
          ${
            toDoList.toDoType === 1
              ? "bg-sky-500"
              : toDoList.toDoType === 2
              ? "bg-yellow-500"
              : toDoList.toDoType === 3
              ? "bg-green-600"
              : "bg-sky-500"
          }
        `}
      />
      <h2 className="max-h-36 uppercase font-bold text-3xl text-left flex justify-center items-center flex-wrap bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
        #{toDoList.id}
        {` `}
        {toDoList.title}
      </h2>
      <div className="flex whitespace-nowrap gap-1 absolute bottom-1 left-1 w-[95%] px-1 overflow-x-clip">
        {toDoList.tags.map((tag: TagType) => (
          <p key={tag.id} className="text-xs text-slate-500 min-w-fit">
            <strong>#{tag.name.replace(" ", "-")}</strong>
          </p>
        ))}
      </div>
    </div>
  );
}
