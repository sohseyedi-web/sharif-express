import { useState } from "react";
import PanelHeader from "../features/panel/PanelHeader";
import FormBox from "../features/panel/formBox/FormBox";
import PrevOrders from "../features/panel/prevOrders/PrevOrders";

const Panel = () => {

  const [show, setShow] = useState(true);

  return (
    <>
      <PanelHeader setShow={setShow} />
      <main className="max-w-2xl mx-auto mt-2 lg:px-2 px-4 p-2">
        {show ? <FormBox /> : <PrevOrders />}
      </main>
    </>
  );
};

export default Panel;
