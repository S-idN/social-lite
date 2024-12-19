import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Body() {
  return (
    <div className="top-40 m-4 inline-flex">
      <LeftSide />
      <RightSide />
    </div>
  );
}
