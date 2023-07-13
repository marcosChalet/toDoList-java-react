import ToDoList from "./components/ToDoList";
import ModalViewList from "./components/ModalViewList";
import ModalCreateList from "./components/ModalCreateList";
import { ToDoListType } from "./core/toDoListType";
import { toDoLists } from "../staticdemo";
import { ToDoType } from "./core/toDoType";

import { MdNoteAdd } from "react-icons/md";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [toDoListToShow, setToDoListToShow] = useState<ToDoType[]>([]);
  const [showModalCreateList, setShowModalCreateList] =
    useState<boolean>(false);

  function selectList(item: ToDoType[]) {
    setToDoListToShow(item);
    setShowModal(true);
  }

  function dropModal(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cb: () => void
  ) {
    if (e.clientX === 0 && e.clientY === 0) {
      return;
    }
    cb();
  }

  return (
    <div className="dark:[color-scheme:dark] bg-slate-950 text-slate-300 w-screen h-screen overflow-auto box-border grid grid-rows-[90px_1fr]">
      <header className="w-full px-8 flex justify-start items-center">
        <p className="text-4xl uppercase font-bold inline-block bg-gradient-to-r from-violet-700 to-red-700 bg-clip-text text-transparent">
          To-do App
        </p>
      </header>
      <main className="container px-16 py-10">
        <section className="flex gap-8 flex-wrap justify-center items-center">
          {toDoLists
            .map((list: ToDoListType) => (
              <ToDoList key={list.id} toDoList={list} selectList={selectList} />
            ))
            .reverse()}
        </section>
      </main>
      <button
        onClick={() => setShowModalCreateList(true)}
        className="absolute p-2 text-4xl bg-gradient-to-r from-rose-600 to-purple-600 rounded-es-xl rounded-se-xl bottom-12 right-12 duration-300 hover:scale-110 hover:cursor-cell"
      >
        <MdNoteAdd />
      </button>
      {showModal && (
        <div
          onClick={(e) => dropModal(e, () => setShowModal(false))}
          className="absolute w-full h-full backdrop-blur-sm overflow-hidden transition-opacity"
        >
          <ModalViewList toDos={toDoListToShow} />
        </div>
      )}
      {showModalCreateList && (
        <div
          onClick={(e) => dropModal(e, () => setShowModalCreateList(false))}
          className="absolute w-full h-full backdrop-blur-sm overflow-hidden transition-opacity"
        >
          <ModalCreateList />
        </div>
      )}
    </div>
  );
}
