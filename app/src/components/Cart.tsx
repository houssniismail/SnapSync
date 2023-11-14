import React from 'react'
import { Icon } from '@iconify/react';

const Cart: React.FC = () => {
    return (
        <>
        <div className='m-2 shadow-xl rounded-b-2xl'>
            <div className='relative '>
                <img className='w-[100%] rounded-t-2xl' src="postimage.jpg" alt="" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-opacity-50 rounded-t-2xl bg-gray-500 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    <div className='flex justify-between p-3'>
                        <div>
                            <p className=' text-white p-1'>text</p>
                            <p className=' text-white p-1'>3 hours ago</p>
                        </div>
                        <div >
                            <Icon className=' cursor-pointer' icon="octicon:kebab-horizontal-24" width="30" color='white'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <p className=' text-slate-500'>#test</p>
            </div>
            <div className='p-2 text-xl'>
                <p>test</p>
            </div>
            <div className='p-2'>
                <p className='text-slate-500'>test1</p>
            </div>
            <div className='p-2 flex justify-between'>
                <div className='flex text-[#3f51b5]'>
                    <Icon color='#3f51b5' icon={"mdi:like"} width="26" />
                    <p>LIKE</p>
                </div>
                <div className='flex text-[#3f51b5]'>
                    <Icon color='#3f51b5' icon="ic:baseline-delete" width="26" />
                    <p>DELETE</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart