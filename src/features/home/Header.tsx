import { RiPhoneFill, RiDownloadCloudLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed w-full py-4 container flex items-center justify-end px-4">
      <div className="flex items-center gap-x-2">
        <button className="lg:px-4 px-2 h-[45px] bg-gray-600 text-white lg:text-lg text-base rounded-lg flex items-center gap-x-2">
          061-33333333
          <RiPhoneFill size={26} />
        </button>
        <button className="lg:px-4 px-2 h-[45px] bg-green-500 lg:text-lg text-base rounded-lg text-white flex items-center gap-x-2">
          دریافت PWA
          <RiDownloadCloudLine size={26} />
        </button>
      </div>
    </header>
  );
};

export default Header;
