import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'

const AdminLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <section dir="rtl" className="flex container mx-auto h-screen flex-col">
      <AdminHeader />
      <div className="flex h-screen">
        {children}
        <div className="flex-1 overflow-y-auto p-4 px-7">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default AdminLayout