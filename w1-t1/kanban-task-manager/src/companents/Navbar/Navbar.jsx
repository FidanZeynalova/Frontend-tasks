import React from 'react'
import bubbleChat from '../../assets/bubble-chat.png'
import dashboardSquare from '../../assets/dashboard-square-01.png'
import file from '../../assets/file-02.png'
import userMultiple from '../../assets/user-multiple.png'
import setting from '../../assets/setting-01.png'
import helpCircle from '../../assets/help-circle.png'
import logout from '../../assets/logout-03.png'


function Navbar() {
    return (
        <>
            <div className='fixed top-0 left-0 h-full w-[84px] bg-white border-r border-[#1D2939]/10 p-4 rounded-lg  shadow-lg flex flex-col justify-between'>
                <div className='flex flex-col justify-center items-center gap-[10px]'>

                    <div className='w-10 h-10 bg-[#2CBA7A] rounded-lg flex justify-center items-center text-white font-bold text-2xl'>
                        <div className='text-[#02532F]'>C</div>
                    </div>
                    <div className='w-10 h-10 rounded-lg flex justify-center items-center'>
                        <img src={dashboardSquare} alt="" />
                    </div>
                    <div className='w-10 h-10 rounded-lg flex justify-center items-center'>
                        <img src={file} alt="" />
                    </div>
                    <div className='w-10 h-10 rounded-lg flex justify-center items-center'>
                        <img src={bubbleChat} alt="" className='w-6 h-6' />
                    </div>
                    <div className='w-10 h-10 rounded-lg flex justify-center items-center'>
                        <img src={userMultiple} alt="" />
                    </div>
                    <div className='w-10 h-10 rounded-lg flex justify-center items-center'>
                        <img src={setting} alt="" />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-[10px]'>
                    <div className='w-10 h-10 rounded-lg flex justify-center items-center'>
                        <img src={helpCircle} alt="" />
                    </div>
                    <div className='w-10 h-10 rounded-lg flex justify-center items-center'>
                        <img src={logout} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
