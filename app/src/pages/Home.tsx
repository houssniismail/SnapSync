import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
const Home: React.FC = () => {
    return (
        <div>
            <div className=" flex justify-center">
                <Navbar />
            </div>
            <div className=" flex flex-col justify-center md:justify-evenly md:flex-row ">
                <div className="w-[100%] md:w-3/6 ">
                    <Cart />
                </div>
                <div className=" w-[100%] md:w-1/4">
                    <Form />
                </div>
            </div>
        </div>
    )
}
export default Home