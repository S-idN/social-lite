import { NavLink } from "react-router";

export default function HeaderAlt() {
  return (
    <>
      <div className="flex flex-row backdrop-blur-2xl fixed max-h-28 justify-between items-center min-w-[100%] top-0 bg-indigo-950 bg-opacity-30 font-bold text-7xl text-rose-400">
        <div className="">{/*This is an empty element*/}</div>
        <NavLink to="/" end>
          <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-rose-600 pb-1 ml-44 text-transparent bg-clip-text">
            Moodfr
          </div>
        </NavLink>
        <div className="flex flex-col justify-self-end">
          <input
            className="text-[2rem] pb-2 bg-gradient-to-r from-pink-400 via-purple-500 to-rose-600 text-transparent bg-clip-text"
            type="date"
          ></input>
        </div>
      </div>
    </>
  );
}
