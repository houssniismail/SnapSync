import React, { useState } from 'react'
import { addPost } from '../redux/actions/postAction'
import { useDispatch } from 'react-redux';
import { postDataThunk } from '../redux/thinks/fetchDataThunk';

const Form = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        Creator: '',
        Message: '',
        Tags: [],
        Title: ''
    });
    const handleChange = (e) => {
        if (e.target.name === 'Tags') {
            const tagsArray = e.target.value.split(',');
            setPost({
                ...post,
                [e.target.name]: tagsArray
            });
        } else {
            setPost({
                ...post,
                [e.target.name]: e.target.value
            });
        }
    };

    const handlePostData = () => {
        // dispatch(addPost(post))
        dispatch(postDataThunk(post))
    };

    return (
        <>
            <div className="m-3 shadow-md  rounded-xl py-2">
                <div className=" flex justify-center p-2">
                    <h1>Creating a memory</h1>
                </div>
                <div className="">
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='Creator' name="Creator" className="border outline-none w-[80%] h-9 rounded-md" placeholder="Creator" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='Title' name='Title' className="border outline-none w-[80%] h-9 rounded-md" placeholder="Title" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='Message' name='Message' className=" border outline-none w-[80%] h-9 rounded-md" placeholder="Message" type="text" />
                    </div>
                    <div className=" p-2 flex justify-center" >
                        <input onChange={(e) => handleChange(e)} id='Tags' name='Tags' className="border outline-none w-[80%] h-9 rounded-md" placeholder="Tags" type="text" />
                        {/* <span>{tags.map((item) => (item))}</span> */}
                    </div>
                    <div className=" p-2 flex justify-center">
                        <input onChange={(e) => handleChange(e)} id='image' name='image' className=" w-[80%] h-9" type="file" />
                    </div>
                    <div className=" p-2 flex justify-center">
                        <button onClick={() => handlePostData()} className="border outline-none w-[80%] h-9 bg-[#3d4fb0] rounded-md text-white">SUBMIT</button>
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