import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { useState, useEffect } from "react";
import backtotop from "./assets/images/webp/back-to-top.webp";
import HowItWork from "./components/lendingpage/HowItWork";

function App() {
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
          <Route path="landingpage" exact element={<LandingPage />}></Route>
        </Routes>
        <HowItWork />
      </div>
      <div
        onClick={() => top()}
        className={
          backToTop
            ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-blue backToTop_animate cursor-pointer transition-all ease-linear duration-300 right-[2%] z-30"
            : "hidden"
        }
      >
        <img src={backtotop} alt="backtotop" />
      </div>
    </>
  );
}

export default App;
