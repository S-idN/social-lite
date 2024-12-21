import { ChangeEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DayPlan() {
  let currTime = "";
  const notify = () => {
    toast.error("You seem to be busy then", {
      toastId: 1,
      draggable: true,
      closeOnClick: true,
      pauseOnHover: false,
      autoClose: 3000,
      theme: "color",
      position: "bottom-center",
    });
  };
  /*If something breaks check onChange*/
  const [timePlan, setTimePlan] = useState([{ plan: "" }]);
  const [valuet, setValue] = useState([{ valt: "00:00" }]);
  const handleClick = () => {
    setTimePlan([...timePlan, { plan: "" }]);
    setValue([...valuet, { valt: "00:00" }]);
  };
  const remClick = (index: number) => {
    const list = [...timePlan];
    const list2 = [...valuet];
    list.splice(index, 1);
    list2.splice(index, 1);
    setTimePlan(list);
    setValue(list2);
  };
  const setInputVal = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const list = [...timePlan];
    list[index].plan = value;
    setTimePlan(list);
    console.log(timePlan[index]);
  };
  const timeCheck = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const list = [...valuet];
    list[index].valt = value;
    setValue(list);
    timeRepCheck(e, index);
  };
  const timeRepCheck = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let testVal = e.target.value;
    let count = 0;
    for (let i = 0; i < valuet.length; i++) {
      let testesVal = valuet[i].valt;
      if ("" + testesVal == testVal) {
        count++;
        if (count > 1) {
          currTime = testVal;
          notify();
          console.log("We won Mr.Stark");
        } else {
          console.log("Count is: " + count);
        }
      } else {
        console.log("Thing-1 is: " + testVal + "Thing-2 is: " + testesVal);
      }
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center text-red-400 font-bold self-end">
        <div className="flex justify-center bg-gradient-to-r from-violet-500/40 to-rose-500/40 m-4 p-6 w-[30rem] rounded-lg text-3xl ">
          Plan your Day
        </div>
        <div className="bg-gradient-to-r from-purple-700/40 to-red-700/40 m-4 min-w-96 rounded-lg text-xl">
          {timePlan.map((sinlgePlan, index) => (
            <div key={index} className="flex items-center">
              <div className="p-4">
                <input
                  aria-label="Time"
                  type="time"
                  className="bg-gradient-to-l from-purple-950 to-neutral-950 rounded-lg p-2 text-rose-700 opacity-80"
                  onChange={(e) => timeCheck(e, index)}
                />
              </div>
              <input
                value={sinlgePlan.plan}
                className="flex self-center placeholder-opacity-60 text-neutral-800 bg-gradient-to-r from-purple-950/80 to-violet-950/60 max-w-80 m-4 p-2 rounded-lg"
                placeholder=""
                onChange={(e) => setInputVal(e, index)}
              />
              {timePlan.length - 1 === index && (
                <button onClick={handleClick} className="p-2">
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
