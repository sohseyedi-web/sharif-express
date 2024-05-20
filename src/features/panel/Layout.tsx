import { useState } from "react";
import PanelHeader from "./PanelHeader";
import FormBox from "./formBox/FormBox";
import PrevOrders from "./prevOrders/PrevOrders";

const Layout = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <PanelHeader setShow={setShow} />
      <main className="max-w-2xl mx-auto mt-2 lg:px-2 px-5 p-2">
        {show ? <FormBox /> : <PrevOrders />}
      </main>
    </>
  );
};

export default Layout;
