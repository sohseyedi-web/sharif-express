import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Panel from "./pages/Panel";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import PanelLayout from "./features/panel/PanelLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* panel user routes */}

        <Route path="/profile" element={<PanelLayout />}>
          <Route path="/profile" element={<Panel />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/join" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
