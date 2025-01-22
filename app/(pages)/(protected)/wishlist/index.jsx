"use client"
import withAuthProtection from '@/app/_features/_authentication/AuthChecker'
import WishlistCard from '@/app/_features/_wishlist/components/WishlistCard'
import ItemNotFound from '@/components/common/ItemNotFound'
import Loader from '@/components/common/Loader'
import { useWishListContext } from '@/context/WishListContext'
import React, { useEffect } from 'react'
import "./wishlist.css"

const WishlistIndex = () => {
  const {getUserWishList, loadingWishList, userWishList} = useWishListContext()
  useEffect(()=>{
    getUserWishList()
  },[])
  return (
    <div className='pt-[70px] container'>
      <h1 className='lbd-h1 text-center mb-4'>Your Wishlist</h1>
      {
        loadingWishList ?
        <Loader /> :
        <section >
        {
            userWishList?.length > 0 ?
            <section className='grid wishlist gap-4 sm:grid-cols-3 md:grid-cols-4'>
            {userWishList?.map((item, index)=>(
                <WishlistCard item={item} key={index}/>
            ))}
            </section> :
            <ItemNotFound text={'Your Wishlist is empty'}/>
        }
      </section>
      }
    </div>
  )
}

export default withAuthProtection(WishlistIndex)
