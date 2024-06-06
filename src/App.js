import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { useState, useEffect } from "react";
import backtotop from "./assets/images/webp/back-to-top.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //----------------------AOS-Animation-----------------
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/landingpage" exact element={<LandingPage />}></Route>
        </Routes>
      </div>
      <div
        onClick={() => top()}
        className={
          backToTop
            ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] sm:h-[50px] sm:w-[50px] h-10 w-10 flex items-center justify-center backTopBtn rounded-[50px] bg-blue backToTop_animate cursor-pointer transition-all ease-linear duration-300 right-[2%] z-30"
            : "hidden"
        }
      >
        <img
          src={backtotop}
          alt="backtotop"
          className="sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </>
  );
}

export default App;
