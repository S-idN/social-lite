import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DateRN from "./Components/DateRN";
import Body from "./Components/Body";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-svh min-w-svh bg-gradient-to-r from-indigo-950 via-neutral-950 to-indigo-950 ">
        <Header />
        <DateRN />
        <Body />
        <Footer />
      </div>
    </>
  );
}
