import { ChangeEvent, useState } from "react";

export default function Tester() {
  let hitLimitText = "";
  const [todoList, setTodoList] = useState([{ todo: "" }]);

  const handleClick = () => {
    setTodoList([...todoList, { todo: "" }]);
    if (todolen > 3) {
      hitLimitText = "That might be enough for the day!";
    }
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
  let todolen = todoList.length;
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
        <div className="flex justify-center bg-gradient-to-r from-violet-500/40 to-rose-500/40  m-4 p-6 w-96 rounded-lg text-3xl ">
          {todolen} Key Items {hitLimitText}
        </div>
        <div className="bg-gradient-to-r from-purple-700/40 to-red-700/40 m-4 min-w-80 max-w-96 rounded-lg text-xl">
          {todoList.map((singleTodo, index) => (
            <div key={index} className="inline-flex ">
              <input
                className="flex self-center text-neutral-800 placeholder-opacity-30 bg-gradient-to-r from-purple-950/60 to-violet-950/80 max-w-80 opacity-80 m-4 p-2 rounded-lg"
                placeholder=""
                value={singleTodo.todo}
                onChange={(e) => setInputVal(e, index)}
              />
              {todoList.length - 1 === index && todoList.length < 4 && (
                <>
                  <button onClick={handleClick} className="p-2">
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
