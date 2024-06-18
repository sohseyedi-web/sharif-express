import CreateSupport from "../features/support/CreateSupport";
import { BiSupport } from "react-icons/bi";
import { useState } from "react";
import Modal from "../ui/Modal";
import { useGetSupports } from "../hooks/supports/useSupports";
import SupportItem from "../features/support/SupportItem";
import { SupportType } from "../lib/types";
import Loading from "../ui/Loading";

const Support = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, supports } = useGetSupports();

  if (isLoading) return <Loading />;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:rotate-[360deg] transition-all duration-500 right-5 bottom-5 absolute w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r hover:bg-gradient-to-l from-green-600 to-lime-600 text-white"
      >
        <BiSupport size={32} />
      </button>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title="ثبت درخواست جدید"
      >
        <CreateSupport onClose={() => setOpen(false)} />
      </Modal>
      {!supports.length ? (
        <section className="flex items-center justify-center mt-6">
          <h5>درخواست پشتیبانی تا الان ثبت نکردید</h5>
        </section>
      ) : (
        <section className="flex items-center justify-between flex-wrap gap-y-3 mt-10">
          {supports?.map((support: SupportType, index: number) => (
            <SupportItem support={support} key={support?._id} index={index} />
          ))}
        </section>
      )}
    </>
  );
};

export default Support;
