import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk, postDeleteTunk } from '../redux/thinks/fetchDataThunk';
const Carts = () => {

    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.fetchDataReducer);
    useEffect(() => {
        dispatch(fetchDataThunk());
    }, [dispatch]);
    const handleDelete = (cart_id) => {
        dispatch(postDeleteTunk(cart_id))
    }
    if (loading) {
        return (
            <div>
                loading ...
            </div>
        )
    } else {
        return (
            <div className='grid md:grid-cols-2 py-4 '>
            {
                data !== null && data.map((item, index) => (
                    <div key={index} className='mx-10 my-2 md:m-2 shadow-xl rounded-b-2xl'>
                        {console.log()}
                        <div className='relative '>
                            <img className='w-[100%] rounded-t-2xl' src="postimage.jpg" alt="" />
                            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-opacity-50 rounded-t-2xl bg-gray-500 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                <div className='flex justify-between p-3'>
                                    <div>
                                        <p className=' text-white p-1'>text</p>
                                        <p className=' text-white p-1'>3 hours ago</p>
                                    </div>
                                    <div >
                                        <Icon className=' cursor-pointer' icon="octicon:kebab-horizontal-24" width="30" color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-2'>
                            <p className=' text-slate-500'>{item.title}</p>
                        </div>
                        <div className='p-2 text-xl'>
                            <p>{item.title}</p>
                        </div>
                        <div className='p-2'>
                            <p className='text-slate-500'>{item.message}</p>
                        </div>
                        <div className='p-2 flex justify-between'>
                            <div className='flex text-[#3f51b5]'>
                                <Icon color='#3f51b5' icon={"mdi:like"} width="26" />
                                <p>LIKE <span>{item.like}</span></p>
                            </div>
                            <div onClick={() => handleDelete(item._id)} className='flex text-[#3f51b5]'>
                                <Icon color='#3f51b5' icon="ic:baseline-delete" width="26" />
                                <p>DELETE </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
        )
    }
}

export default Carts
