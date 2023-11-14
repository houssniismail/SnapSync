import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Listcart from "../components/Listcart";
const Home: React.FC = () => {
    return (
        <div>
            <div className=" flex justify-center">
                <Navbar />
            </div>
            <div className=" flex flex-col justify-center md:justify-evenly md:flex-row ">
                <div className="w-[100%] md:w-3/6">
                    <Listcart />
                </div>
                <div className=" w-[100%] md:w-1/4">
                    <Form />
                </div>
            </div>
        </div>
    )
}
export default Home