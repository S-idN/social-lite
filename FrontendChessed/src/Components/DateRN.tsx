export default function DateRN() {
  const total_date = new Date();
  const day = total_date.getDate();
  const month = total_date.getMonth() + 1;
  const year = total_date.getFullYear();
  const curr_date = day + "/" + month + "/" + year;
  return (
    <>
      <div className="flex flex-col items-center fixed top-16 text-red-400 font-bold text-5xl">
        Today's Date
        <div className="flex justify-center top-0 text-4xl m-4">
          {curr_date}
        </div>
      </div>
    </>
  );
}
