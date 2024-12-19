import { ChangeEvent, useState } from "react";

export default function Tester() {
  const [todoList, setTodoList] = useState([{ todo: "" }]);
  const handleClick = () => {
    setTodoList([...todoList, { todo: "" }]);
  };
  const remClick = (index: number) => {
    const list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };
  const setInputVal = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } =
      e.target; /*If something breaks add name before value here*/
    const list = [...todoList];
    list[index].todo = value;
    setTodoList(list);
    console.log(todoList[index]);
  };
  /*In case checkbox is needed
  const checkBoxSet = () => {
    console.log("This is important ig?");
  };
  onClick={() => checkBoxSet()}
  */
  return (
    <>
      <div className="flex flex-col">
        {todoList.map((singleTodo, index) => (
          <div key={index} className="inline-flex ">
            <input
              className="flex w-3/5 self-center p-4 my-4 text-xl text-indigo-400 bg-red-950 font-semibold opacity-80 placeholder-opacity-30 rounded-lg"
              placeholder="Stay with meeeeeee"
              value={singleTodo.todo}
              onChange={(e) => setInputVal(e, index)}
            />
            {todoList.length - 1 === index && todoList.length < 4 && (
              <>
                <button onClick={handleClick} className="p-4">
                  +
                </button>
              </>
            )}
            {todoList.length > 1 && (
              <button onClick={() => remClick(index)} className="p-4">
                -
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
