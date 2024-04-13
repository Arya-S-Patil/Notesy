import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import TakeNote from "./components/TakeNote";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Err from "./components/Err";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/auth/:page" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/takenote" element={<TakeNote />} />
        <Route path="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
