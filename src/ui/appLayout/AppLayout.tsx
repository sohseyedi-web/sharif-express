import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto container">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
