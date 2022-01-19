import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Page/Detail";
import Home from "./Page/Home";
import NavbarComp from "./Componenet/NavbarComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
