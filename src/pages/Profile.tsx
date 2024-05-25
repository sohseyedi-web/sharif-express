import { useState } from "react";
import ProfileHeader from "../features/profile/ProfileHeader";
import FormBox from "../features/profile/formBox/FormBox";
import PrevOrders from "../features/profile/prevOrders/PrevOrders";

const Profile = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <ProfileHeader setShow={setShow} />
      <main className="max-w-2xl mx-auto mt-2 lg:px-2 px-4 p-2">
        {show ? <FormBox /> : <PrevOrders />}
      </main>
    </>
  );
};

export default Profile;
