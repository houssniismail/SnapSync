import React from 'react'

const Form = () => {
    return (
        <>
            <div className="m-3 shadow-md  rounded-xl py-2">
                <div className=" flex justify-center p-2">
                    <h1>Creating a memory</h1>
                </div>
                <div className="">
                    <div className=" p-2 flex justify-center">
                        <input className="border outline-none w-[80%] h-9 rounded-md" placeholder="Creator" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input className="border outline-none w-[80%] h-9 rounded-md" placeholder="Title" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input className=" border outline-none w-[80%] h-9 rounded-md" placeholder="Message" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input className="border outline-none w-[80%] h-9 rounded-md" placeholder="Tags" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input className=" w-[80%] h-9" type="file" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <button className="border outline-none w-[80%] h-9 bg-[#3d4fb0] rounded-md text-white">SUBMIT</button>
                    </div>
                    <div className=" p-2 flex justify-center">
                        <button className="border outline-none w-[80%] h-9 bg-[#f40057] rounded-md text-white">CLEAR</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form