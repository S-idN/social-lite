export default function LoginBox() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-indigo-950 bg-opacity-80 rounded-lg font-semibold text-3xl text-violet-400 p-2">
        Login
        <div className="flex flex-col justify-center items-center text-xl">
          Username
          <input className="m-2 pl-2 text-indigo-950 text-xl rounded-lg bg-gradient-to-r from-rose-600 to-indigo-800"></input>
          Password
          <input className="m-2 pl-2 text-indigo-950 text-xl rounded-lg bg-gradient-to-r from-rose-600 to-indigo-800"></input>
          <button className="bg-gradient-to-r from-rose-600 to-indigo-800 rounded-lg px-2 py-1 m-2 text-neutral-950">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
