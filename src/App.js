import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage/>}></Route>
        <Route path="landingpage" exact element={<LandingPage />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
