import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom';
import Orders from '../components/orders'

function OrderPage() {
  return (
    <div>
        <Routes>
            <Route path="/orders" element={<Orders/>} />
        </Routes>
    </div>
  )
}

export default OrderPage