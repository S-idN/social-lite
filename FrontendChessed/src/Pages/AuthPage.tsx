import HeaderAlt from "../Components/HeaderAlt";
import Footer from "../Components/Footer";
import LoginBox from "../Components/LoginBox";

export default function AuthPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-svh bg-gradient-to-r from-neutral-950 via-slate-950 to-neutral-950 ">
        <HeaderAlt />
        <LoginBox />
        <Footer />
      </div>
    </>
  );
}
