import { BookText, CircleSlash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Orders = () => {
  return (
    <section>
      <div className='flex items-center gap-4'>
        <BookText />
        <h2 className='lbd-sub-text'>My Orders</h2>
      </div>

      <section>
        {
          [].length !== 0 ?
          <></> :
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
    </section>
  )
}

export default Orders
