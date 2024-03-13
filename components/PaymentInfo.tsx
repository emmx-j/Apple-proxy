import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoX } from "react-icons/go"
const price = ['1 day $99', '1 week $360', '6 months $550', 'lifetime $1620']
interface conditionprop {
  closepriceList: (item: boolean) => void
}

const PaymentInfo = ({closepriceList}: conditionprop) => {
  
  return (
    <div className='PaymentInfo'>
      <GoX className='Xcloss' onClick={() =>{
        closepriceList(false)
      }}/>
        <div className="PaymentData">
            {price.map((items) => 
                <button className='priceItem'>{items}</button>
            )}
        </div>
    </div>
  )
}

export default PaymentInfo
