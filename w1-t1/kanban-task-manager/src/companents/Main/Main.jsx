import React from 'react'
import Cards from './Cards'

function Main() {
    return (
        <div className="w-full min-h-screen bg-[#F2F4F7] flex flex-col gap-8 p-8 md:px-[160px]">

            {/* Header done */}
            <div className='w-[1108px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10'>

                <div className='text-2xl font-semibold leading-[150%] text-center md:text-left'> Your Tasks</div>

                <div className='flex gap-4'>
                    <button className='bg-[#4186F4] text-white px-4 py-2 rounded-lg text-sm font-medium'> Add a task</button>
                    <button className='bg-transparent text-black border border-[#1D2939] px-4 py-2 rounded-lg text-sm font-medium'>Invite</button>
                </div>

            </div>

            {/* Cards Section */}
           <Cards />
            


        </div>
    )
}

export default Main
