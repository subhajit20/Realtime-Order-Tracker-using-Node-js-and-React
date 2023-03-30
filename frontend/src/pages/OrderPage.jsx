import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom';
import Individualorder from '../components/individualorder'
import Orders from '../components/orders'

function OrderPage() {
  return (
    <div>
        <Routes>
            <Route path="/orders" element={<Orders/>} />
            <Route path="/viewthisorder" element={<Individualorder />} />
        </Routes>
    </div>
  )
}

export default OrderPage