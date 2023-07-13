import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import BaseModal from "./BaseModal";

export default function ModalCreateList() {
  const [id] = useState<number>(16);
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<number>(-1);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");

  function addTag(e: React.KeyboardEvent<HTMLInputElement>, currText: string) {
    if (currText === "") return;
    if (e.key === "Enter") {
      setTags((prev: string[]) => [...prev, currText]);
      setTag("");
    }
  }

  function changeType(type: number) {
    if (type >= 4 || type <= -1) return;
    setType(type);
  }

  return (
    <BaseModal>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="overflow-hidden relative px-3 bg-slate-800 rounded-md w-72 h-48 flex justify-center items-center duration-200 hover:translate-x-1 hover:translate-y-2 hover:cursor-crosshair">
          <div className="absolute p-1 right-2 top-1 text-2xl text-slate-400 hover:cursor-pointer">
            <BsThreeDots />
          </div>
          <div
            className={`absolute top-2 left-2 animate-pulse rounded-full w-2 h-2 
              ${
                type === 1
                  ? "bg-sky-500"
                  : type === 2
                  ? "bg-yellow-500"
                  : type === 3
                  ? "bg-green-600"
                  : "bg-sky-500"
              }
            `}
          />
          <h2 className="max-h-36 uppercase font-bold text-3xl text-left flex justify-center items-center flex-wrap bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
            #{id}
            {` `}
            {title}
          </h2>
          <div className="flex whitespace-nowrap gap-1 absolute bottom-1 left-1 w-[95%] px-1 overflow-x-clip">
            {tags.map((tag: string) => (
              <p key={tag} className="text-xs text-slate-500 min-w-fit">
                <strong>#{tag.replace(" ", "-")}</strong>
              </p>
            ))}
            <p className="text-xs text-slate-500 min-w-fit">
              <strong>
                {tag && `#${tag.trimStart().replaceAll(" ", "-")}`}
              </strong>
            </p>
          </div>
        </div>

        <form
          method="POST"
          className="w-full h-full flex justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center gap-3 w-[500px] text-slate-400">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="título"
              className="w-full p-2 px-3 rounded-sm bg-slate-800"
            />
            <input
              value={type}
              onChange={(e) => changeType(+e.target.value)}
              type="number"
              placeholder="tipo"
              className="w-full p-2 px-3 rounded-sm bg-slate-800"
            />
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              type="text"
              placeholder="tag"
              className="w-full p-2 px-3 rounded-sm bg-slate-800"
              onKeyUp={(e) => addTag(e, tag)}
            />

            <input
              disabled
              onSubmit={(e) => e.preventDefault()}
              type="submit"
              className="bg-slate-700 text-lg font-bold uppercase w-full h-12 duration-300 hover:cursor-pointer hover:bg-slate-950"
            />
          </div>
        </form>
      </div>
    </BaseModal>
  );
}
