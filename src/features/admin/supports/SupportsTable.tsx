import { useAllGetSupports } from "../../../hooks/admin/useGetAdminData";
import { SupportType } from "../../../lib/SupportTypes";
import Table from "../../../ui/Table";
import SupportRow from "./SupportRow";

const SupportsTable = () => {
  const { isLoading, supports } = useAllGetSupports();

  if (isLoading) return <div>لطفا صبر کنید</div>;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام کاربری</th>
        <th>شماره موبایل</th>
        <th>دسته بندی</th>
        <th>تاریخ درخواست</th>
        <th>وضعیت</th>
        <th>مشاهده</th>
      </Table.Header>
      <Table.Body>
        {supports?.map((support: SupportType, index: number) => (
          <SupportRow key={support._id} index={index} support={support} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default SupportsTable;
