import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import HighScore from "./pages/HighScore";
import "./App.css";

function App() {
  const [timerOn, setTimerOn] = useState(true);

  return (
    <BrowserRouter>
      <Nav timerOn={timerOn} />
      <Routes>
        <Route path="/" element={<Home setTimerOn={setTimerOn} />} />
        <Route path="/high-score" element={<HighScore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
