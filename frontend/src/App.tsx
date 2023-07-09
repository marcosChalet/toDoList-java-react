import { useRef } from "react";
import Todo from "./components/Todo";
import { TodoType } from "./core/todoType";
import { useTodoData } from "./hooks/useTodoData";
import { useTodoDataMutate } from "./hooks/useTodoDataMutate";
import { BsFillSendPlusFill } from "react-icons/bs";

export default function App() {
  const { data } = useTodoData();
  const { mutate } = useTodoDataMutate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  function addTodo() {
    const title = inputRef.current?.value ?? "";
    const todo: TodoType = {
      title,
    };
    mutate(todo);
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="dark:[color-scheme:dark] bg-slate-950 text-slate-300 w-screen h-screen overflow-auto box-border flex justify-center items-center">
      <div className="w-[700px]">
        <h1 className="text-5xl mb-8 uppercase font-bold inline-block bg-gradient-to-r from-violet-700 to-red-700 bg-clip-text text-transparent">
          Todo App
        </h1>
        <div className="bg-slate-700 rounded-md max-h-96 overflow-y-auto">
          {data?.map((todo: TodoType, idx: number) => (
            <Todo
              key={todo.id}
              idx={idx}
              id={todo.id ?? -1}
              title={todo.title}
            ></Todo>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3 h-14">
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
            <BsFillSendPlusFill className="text-slate-300 text-2xl hover:scale-125 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
