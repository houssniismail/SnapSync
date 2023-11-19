import React, { useReducer, useState } from 'react'
import { addPost, updatePost } from '../redux/actions/postAction'
import postReducer from '../redux/reducers/postReducer'
const initialState = {
    posts: [],
};
const Form = () => {
    const [prev, dispatch] = useReducer(postReducer, initialState)
    const [post, setPost] = useState();
    const handleChange = (e) => {
        setPost((prev)=>{
            let post = {...prev}
            post[`${e.target.id}`] = e.target.value
            return post;
        })
    }
    return (
        <>
            <div className="m-3 shadow-md  rounded-xl py-2">
                <div className=" flex justify-center p-2">
                    <h1>Creating a memory</h1>
                </div>
                <div className="">
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='creator' className="border outline-none w-[80%] h-9 rounded-md" placeholder="Creator" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='title' className="border outline-none w-[80%] h-9 rounded-md" placeholder="Title" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='message' className=" border outline-none w-[80%] h-9 rounded-md" placeholder="Message" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='Tags' className="border outline-none w-[80%] h-9 rounded-md" placeholder="Tags" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='image' className=" w-[80%] h-9" type="file" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <button onClick={() => dispatch(addPost(post))} className="border outline-none w-[80%] h-9 bg-[#3d4fb0] rounded-md text-white">SUBMIT</button>
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