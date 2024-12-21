export default function DateRN() {
  const total_date = new Date();
  const day = total_date.getDate();
  const month = total_date.getMonth() + 1;
  const year = total_date.getFullYear();
  const curr_date = day + "/" + month + "/" + year;
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-r from-cyan-200 via-purple-400 to-rose-500 p-1 text-transparent bg-clip-text font-semibold text-5xl">
        Today's Date
        <div className="flex justify-center top-0 text-4xl m-4">
          {curr_date}
        </div>
      </div>
    </>
  );
}
