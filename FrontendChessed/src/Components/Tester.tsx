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
  /*Key Items was formerly known as Today's Plan*/
  return (
    <>
      <div className="flex flex-col text-red-400 font-bold ">
        <div className="self-start bg-rose-700 bg-opacity-30 m-4 p-8 w-96 rounded-lg text-2xl ">
          Key Items
        </div>
        <div className="bg-rose-700 bg-opacity-30 m-4 min-w-80 rounded-lg">
          {todoList.map((singleTodo, index) => (
            <div key={index} className="inline-flex ">
              <input
                className="flex self-center placeholder-opacity-30 bg-indigo-700 max-w-80 bg-opacity-30 m-4 p-2 rounded-lg"
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
      </div>
    </>
  );
}
