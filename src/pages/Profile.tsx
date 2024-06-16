import { useState } from "react";
import ChoiceService from "../features/profile/ChoiceService";
import FormBox from "../features/profile/formBox/FormBox";
import PrevOrders from "../features/profile/prevOrders/PrevOrders";
import ProfileHeader from "../features/profile/ProfileHeader";
import WatinigOrders from "../features/profile/WatinigOrders";

const Profile = () => {
  const [show, setShow] = useState(0);
  return (
    <main className="mt-2 p-2 max-w-2xl mx-auto lg:px-2 px-4">
      {show == 0 ? <ChoiceService setShow={setShow} /> : null}
      {show == 1 ? (
        <>
          <ProfileHeader setShow={setShow} title={"فرم ایجاد سفارش"} />
          <FormBox />
        </>
      ) : null}
      {show == 2 ? (
        <>
          <ProfileHeader setShow={setShow} title={"پنج سفارش آخر"} />
          <PrevOrders />
        </>
      ) : null}
      <WatinigOrders/>
    </main>
  );
};

export default Profile;
