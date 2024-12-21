import DateRN from "./DateRN";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Body() {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <DateRN />
      <div className="pt-6 pb-11 flex flex-row justify-center items-center">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
