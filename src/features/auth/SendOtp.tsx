import TextField from '../../ui/TextField'

const SendOtp = () => {
  return (
    <form className="space-y-5 mt-3 w-full">
      <p className="my-3 text-gray-800 text-center">لطفا شماره موبایل خودت رو وارد کن</p>
      <TextField
        label={"شماره موبایل"}
        name={"phoneNumber"}
        placeholder="شماره موبایل را وارد کنید"
      />
      <button className="mt-2 btn btn-active btn-success w-full h-[45px] text-white">
        ورود / ثبت نام
      </button>
      
    </form>
  )
}

export default SendOtp