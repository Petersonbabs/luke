import OrderList from '@/app/_features/_order/components/OrderList'
import Loader from '@/components/common/Loader'
import { useOrderContext } from '@/context/OrderContext'
import { BookText, CircleSlash2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Orders = () => {
  const { getAllOrders, userOrders, loadingAllOrder } = useOrderContext();
  
  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <section>
      <div className='flex items-center gap-4 mb-8'>
        <BookText />
        <h2 className='lbd-sub-text'>My Orders</h2>
      </div>

      {
        loadingAllOrder ?
        <Loader /> :
        <section>
        {
          userOrders.length > 0 ?
          <>
            <OrderList userOrders={userOrders}/>
          </> : 
          <section className='max-w-[600px] m-auto my-8'>
            <div className='flex flex-col items-center gap-4'>
              <CircleSlash2 className='size-24'/>
              <h2 className='lbd-h1 text-center'>You currently have no orders</h2>
              <span className='text-gray-700'>Return to your shopping</span>
              <Link href={'/products'} className='btn btn-d6 btn-full text-center'>Start Shopping</Link>
            </div>
          </section>
        }
      </section>
      }
    </section>
  )
}

export default Orders
