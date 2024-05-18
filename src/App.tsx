import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
