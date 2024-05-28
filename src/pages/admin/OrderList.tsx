import TopHeaderLists from '../../features/admin/TopHeaderLists'
import OrdersAdminTable from '../../features/admin/orders/OrdersAdminTable'

const OrderList = () => {
  return (
    <>
      <TopHeaderLists title='لیست سفارشات'/>
      <OrdersAdminTable/>
    </>
  )
}

export default OrderList