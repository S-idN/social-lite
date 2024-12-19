import { ChangeEvent, useState } from "react";

export default function DayPlan() {
  const [timePlan, setTimePlan] = useState([{ plan: "" }]);
  const handleClick = () => {
    setTimePlan([...timePlan, { plan: "" }]);
  };
  const remClick = (index: number) => {
    const list = [...timePlan];
    list.splice(index, 1);
    setTimePlan(list);
  };
  const setInputVal = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const list = [...timePlan];
    list[index].plan = value;
    setTimePlan(list);
    console.log(timePlan[index]);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center text-red-400 font-bold  self-end">
        <div className=" bg-rose-700 bg-opacity-30 m-4 p-8 w-96 rounded-lg text-2xl ">
          Plan your Day
        </div>
        <div className=" bg-rose-700 bg-opacity-30 m-4 min-w-80 rounded-lg">
          {timePlan.map((sinlgePlan, index) => (
            <div key={index} className="flex">
              <input
                value={sinlgePlan.plan}
                className="flex self-center placeholder-opacity-30 bg-indigo-700 max-w-80 bg-opacity-30 m-4 p-2 rounded-lg"
                placeholder="Don't break pls"
                onChange={(e) => setInputVal(e, index)}
              />
              {timePlan.length - 1 === index && (
                <button onClick={handleClick} className="p-4">
                  +
                </button>
              )}
              {timePlan.length > 1 && (
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
