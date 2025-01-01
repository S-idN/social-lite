import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Body from "../Components/Body";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainBody() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-svh w-fit bg-gradient-to-r from-neutral-950 via-slate-950 to-neutral-950  ">
        <Header />
        <ToastContainer />
        <Body />
        <Footer />
      </div>
    </>
  );
}
