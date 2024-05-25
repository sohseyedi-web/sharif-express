import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import ProfileLayout from "./features/profile/ProfileLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* panel user routes */}

        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="/profile" element={<Profile />} />
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
