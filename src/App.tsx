import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Panel from "./pages/Panel";
import Admin from "./pages/Admin";
import NotFound from './pages/NotFound';
import Orders from "./pages/Orders";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Auth />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
