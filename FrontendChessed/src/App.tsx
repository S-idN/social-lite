import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-svh w-fit bg-gradient-to-r from-indigo-950 via-neutral-950 to-indigo-950 ">
        <Header />
        <ToastContainer />
        <Body />
        <Footer />
      </div>
    </>
  );
}
