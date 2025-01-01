import "react-toastify/dist/ReactToastify.css";
import MainBody from "./Pages/MainBody";
import { BrowserRouter, Route, Routes } from "react-router";
import AuthPage from "./Pages/AuthPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
