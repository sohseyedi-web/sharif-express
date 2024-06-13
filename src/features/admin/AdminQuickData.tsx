import { Link } from "react-router-dom";
import {
  useAllGetOrders,
  useAllGetSupports,
  useAllGetUsers,
} from "../../hooks/admin/useGetAdminData";
import Loading from "../../ui/Loading";
import toLocaleDate from "../../utils/toLocadDate";
// import toLocaleDate from "../../utils/toLocadDate";

type AdminQuickPropsBox = {
  title: string;
  loading: boolean;
  desc: string;
  fields: [
    {
      _id: string;
      name: string;
      createdAt: Date;
      phoneNumber : string;
    }
  ];
};

const AdminQuickData = () => {
  const { data, isLoading: userLoading } = useAllGetUsers();
  const { orders, isLoading: orderLoading } = useAllGetOrders();
  const { supports, isLoading: supportLoading } = useAllGetSupports();

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 py-2">
      <AdminQuickDataBox
        title="کاربران سایت"
        loading={userLoading}
        fields={data?.users?.slice(0, 5)}
        desc="به ما پیوست"
      />
      <AdminQuickDataBox
        title="آخرین سفارشات"
        loading={orderLoading}
        fields={orders?.slice(0, 5)}
        desc="سفارش ثبت کرد"
      />
      <AdminQuickDataBox
        title="وضعیت درخواست ها"
        loading={supportLoading}
        fields={supports?.slice(0, 5)}
        desc="درخواست ثبت کرد"
      />
    </section>
  );
};

export default AdminQuickData;

const AdminQuickDataBox = ({
  title,
  loading,
  fields,
  desc,
}: AdminQuickPropsBox) => {
  if (loading) return <Loading />;

  return (
    <div className="mt-3">
      <h4 className="lg:text-xl text-base font-medium mb-2 text-green-500">
        {title}
      </h4>
      {fields?.length ? (
        fields?.map((field) => (
          <div
            className="my-2 md:mx-0 mx-auto rounded-xl p-2 border-slate-200 dark:border-slate-700 border"
            key={field?._id}
          >
            <div className="flex items-center justify-between">
              <span>
                <Link to={`/admin/user/${field?.phoneNumber}`}>
                  <h5 className="font-semibold inline-block ml-1">
                    {" "}
                    {field?.name}{" "}
                  </h5>
                </Link>
                {desc}
              </span>
              <span>{toLocaleDate(field.createdAt)}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-2 text-center">اطلاعاتی وجود ندارد</div>
      )}
    </div>
  );
};
