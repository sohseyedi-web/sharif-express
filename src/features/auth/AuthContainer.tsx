import CompleteProfile from "./CompleteProfile";
import SendOtp from "./SendOtp";
import CheckOtp from "./CheckOtp";
import { useState } from "react";

const AuthContainer = () => {

  const [step,setStep] = useState<number>(1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOtp />;
      case 2:
        return <CheckOtp />;
      case 3:
        return <CompleteProfile />;
    }
  };

  return <div className="flex-1 w-full md:px-8 px-1">{renderStep()}</div>;
};

export default AuthContainer;
