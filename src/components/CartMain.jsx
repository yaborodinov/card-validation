import React from 'react'
import CardForm from './CardForm'
import OrderInfo from './OrderInfo'

const CartMain = () => {
  return (
    <div className="cartMain">
      <div className="title">Finish your order</div>
      <OrderInfo />
      <CardForm />
    </div>
  )
}

export default CartMain
