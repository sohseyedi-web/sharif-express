import TextField from "../../../ui/TextField";
import Loading from "../../../ui/Loading";
import MapComponent from "./Map";
import { useState } from "react";
import { MapType } from "../../../lib/types";

const MapContainer = ({ onSubmit, register, errors, loading }: MapType) => {
  const [address, setAddress] = useState<string>("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-5">
      <MapComponent setAddress={setAddress} />
      <TextField
        name="address"
        value={address}
        placeholder="آدرس خود را وارد کنید"
        label="آدرس"
        onChange={onChangeHandler}
        register={register}
        errors={errors}
      />
      <button className="btn bg-green-700 text-white w-full h-[45px] bordn">
        {loading ? <Loading status={false} /> : "ثبت سفارش"}
      </button>
    </form>
  );
};

export default MapContainer;
