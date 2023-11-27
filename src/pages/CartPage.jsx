import React from 'react'
import StatusBar from '../components/StatusBar'
import SidebarLeft from '../components/SidebarLeft'
import CartMain from '../components/CartMain'
import SidebarRight from '../components/SidebarRight'

const CartPage = () => {
  return (
    <>
      <StatusBar />
      <div className="cartContent">
        <SidebarLeft />
        <CartMain />
        <SidebarRight />
      </div>
    </>
  )
}

export default CartPage
