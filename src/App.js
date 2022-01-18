import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Page/Detail";
import Home from "./Page/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:eventid" element={<Detail />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
