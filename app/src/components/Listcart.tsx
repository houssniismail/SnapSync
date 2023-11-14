import React from 'react'
import Cart from './Cart';

const Listcart: React.FC = () =>{
  return (
    <div className='grid md:grid-cols-2 py-4 '>
        <Cart />
    </div >
  )
}

export default Listcart