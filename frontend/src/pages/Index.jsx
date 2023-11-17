import React from 'react'
import { Navbar,Carts,Form } from '../components'

const Index = () => {
    return (
        <div>
            <div className=" flex justify-center">
                <Navbar />
            </div>
            <div className=" flex flex-col justify-center md:justify-evenly md:flex-row ">
                <div className="w-[100%] md:w-3/6">
                    <Carts />
                </div>
                <div className=" w-[100%] md:w-1/4">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Index