import React from 'react'
import { useGetOrders } from '../../../hooks/orders/useOrders'

const PrevOrders = () => {

  const {isLoading,orders} = useGetOrders()

  console.log(orders)

  return (
    <div>PrevOrders</div>
  )
}

export default PrevOrders