import { useState } from "react";
import TextField from "../../ui/TextField";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  return (
    <form className="space-y-5 mt-3">
      <TextField
        label={"نام کامل "}
        name={name}
        value={name}
        placeholder="نام و نام خانوادگی"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label={"شهر"}
        name={city}
        value={city}
        placeholder="شهر محل سکونت"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="mt-2 btn btn-active btn-success w-full h-[45px] text-white">
        تکمیل اطلاعات
      </button>
    </form>
  );
};

export default CompleteProfile;
