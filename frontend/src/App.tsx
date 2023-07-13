import { MdNoteAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import Modal from "./components/Modal";
import { useState } from "react";
import { ToDoType } from "./core/toDoType";
import ModalCreateList from "./components/ModalCreateList";

const toDoLists = [
  {
    id: 1,
    title: "Viagem para Aracati",
    toDoType: 1,
    tags: ["férias", "passear", "fim-de-semana"],
    toDos: [
      { id: 12321234, toDo: "Passear na praia" },
      { id: 22341188, toDo: "Ver por do sol" },
      { id: 62895014, toDo: "Andar de jangada" },
    ],
  },
  {
    id: 2,
    title: "Compras da semana",
    toDoType: 4,
    tags: ["gastos", "super mercado"],
    toDos: [
      { id: 45271235, toDo: "5KG Arroz" },
      { id: 78411890, toDo: "3KG Feijão" },
    ],
  },
  {
    id: 3,
    title: "Estudar para a prova",
    toDoType: 1,
    tags: ["escola", "estudo", "exame"],
    toDos: [
      { id: 56781234, toDo: "Revisar matéria" },
      { id: 91091188, toDo: "Resolver exercícios" },
      { id: 12131415, toDo: "Fazer resumo" },
    ],
  },
  {
    id: 4,
    title: "Limpar o apartamento",
    toDoType: 1,
    tags: ["casa", "tarefas domésticas"],
    toDos: [
      { id: 16171819, toDo: "Lavar louça" },
      { id: 20212223, toDo: "Passar aspirador de pó" },
      { id: 24252627, toDo: "Organizar a despensa" },
    ],
  },
  {
    id: 5,
    title: "Planejar festa de aniversário",
    toDoType: 1,
    tags: ["celebração", "organização", "eventos"],
    toDos: [
      { id: 28293031, toDo: "Escolher tema" },
      { id: 32333435, toDo: "Fazer lista de convidados" },
      { id: 36373839, toDo: "Comprar decoração" },
    ],
  },
  {
    id: 6,
    title: "Fazer exercícios físicos",
    toDoType: 2,
    tags: ["saúde", "atividade física"],
    toDos: [
      { id: 40414243, toDo: "Correr 5km" },
      { id: 44454647, toDo: "Fazer abdominais" },
      { id: 48495051, toDo: "Alongar" },
    ],
  },
  {
    id: 7,
    title: "Aprender a cozinhar",
    toDoType: 2,
    tags: ["culinária", "receitas"],
    toDos: [
      { id: 52535455, toDo: "Fazer um bolo" },
      { id: 56575859, toDo: "Preparar um jantar completo" },
      { id: 60616263, toDo: "Experimentar uma nova receita" },
    ],
  },
  {
    id: 8,
    title: "Organizar documentos",
    toDoType: 3,
    tags: ["papelada", "arquivos"],
    toDos: [
      { id: 64656667, toDo: "Separar contas pagas" },
      { id: 68697071, toDo: "Arquivar documentos importantes" },
      { id: 72737475, toDo: "Digitalizar papéis" },
    ],
  },
  {
    id: 9,
    title: "Fazer compras online",
    toDoType: 3,
    tags: ["compras", "internet"],
    toDos: [
      { id: 76777879, toDo: "Pesquisar produtos" },
      { id: 80818283, toDo: "Comparar preços" },
      { id: 84858687, toDo: "Fazer o pagamento" },
    ],
  },
  {
    id: 10,
    title: "Assistir a uma série",
    toDoType: 2,
    tags: ["entretenimento", "TV"],
    toDos: [
      { id: 88899091, toDo: "Escolher uma série para assistir" },
      { id: 92939495, toDo: "Preparar snacks" },
      { id: 96979899, toDo: "Maratonar os episódios" },
    ],
  },
  {
    id: 11,
    title: "Cuidar das plantas",
    toDoType: 3,
    tags: ["jardinagem", "natureza"],
    toDos: [
      { id: 100101102, toDo: "Regar as plantas" },
      { id: 103104105, toDo: "Podar as folhas secas" },
      { id: 106107108, toDo: "Adubar o solo" },
    ],
  },
  {
    id: 12,
    title: "Ler um livro",
    toDoType: 4,
    tags: ["leitura", "literatura"],
    toDos: [
      { id: 109110111, toDo: "Escolher um livro para ler" },
      { id: 112113114, toDo: "Encontrar um local tranquilo" },
      { id: 115116117, toDo: "Iniciar a leitura" },
    ],
  },
  {
    id: 13,
    title: "Fazer um projeto DIY",
    toDoType: 4,
    tags: ["criatividade", "artesanato"],
    toDos: [
      { id: 118119120, toDo: "Escolher um projeto" },
      { id: 121122123, toDo: "Comprar os materiais necessários" },
      { id: 124125126, toDo: "Colocar a mão na massa" },
    ],
  },
  {
    id: 14,
    title: "Aprender a tocar um instrumento",
    toDoType: 4,
    tags: ["música", "hobbies"],
    toDos: [
      { id: 127128129, toDo: "Escolher um instrumento" },
      { id: 130131132, toDo: "Encontrar aulas ou tutoriais online" },
      { id: 133134135, toDo: "Praticar regularmente" },
    ],
  },
  {
    id: 15,
    title: "Fazer um curso online",
    toDoType: 3,
    tags: ["aprendizado", "educação"],
    toDos: [
      { id: 136137138, toDo: "Pesquisar cursos de interesse" },
      { id: 139140141, toDo: "Escolher um curso" },
      { id: 142143144, toDo: "Dedicar tempo aos estudos" },
    ],
  },
];

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [toDoListToShow, setToDoListToShow] = useState<[ToDoType]>();
  const [showModalCreateList, setShowModalCreateList] =
    useState<boolean>(false);

  function selectList(item: [ToDoType]) {
    setToDoListToShow(item);
    setShowModal(true);
  }

  function dropModal(e, cb: any) {
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
            .map((list) => (
              <div
                onClick={() => selectList(list.toDos)}
                key={list.id}
                className="overflow-hidden relative px-3 bg-slate-800 rounded-md w-72 h-48 flex justify-center items-center duration-200 hover:translate-x-1 hover:translate-y-2 hover:cursor-crosshair"
              >
                <div className="absolute p-1 right-2 top-1 text-2xl text-slate-400 hover:cursor-pointer">
                  <BsThreeDots />
                </div>
                <div
                  className={`absolute top-2 left-2 animate-pulse rounded-full w-2 h-2 
                ${
                  list.toDoType === 1
                    ? "bg-sky-500"
                    : list.toDoType === 2
                    ? "bg-yellow-500"
                    : list.toDoType === 3
                    ? "bg-green-600"
                    : "bg-sky-500"
                }
                `}
                />
                <h2 className="max-h-36 uppercase font-bold text-3xl text-left flex justify-center items-center flex-wrap bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  #{list.id}
                  {` `}
                  {list.title}
                </h2>
                <div className="flex whitespace-nowrap gap-1 absolute bottom-1 left-1 w-[95%] px-1 overflow-x-clip">
                  {list.tags.map((tag) => (
                    <p key={tag} className="text-xs text-slate-500 min-w-fit">
                      <strong>#{tag.replace(" ", "-")}</strong>
                    </p>
                  ))}
                </div>
              </div>
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
          <Modal toDos={toDoListToShow} />
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
