import React from 'react'

function Home() {
    return (
        <div style={{backgroundImage:"url('images/home.png')"}} className='px-[150px] '>
            <div className='bg-black absolute top-[70px] left-0 right-0 bottom-0 opacity-80'>

            </div>
        
            <div className='w-full h-[calc(100vh-75px)] z-50'>
                <div className='grid grid-cols-12 justify-center items-center'>
                    <div className='col-span-6 text-white z-50' >
                        <h1 className='text-[36px] leading-9  font-bold'>The Ultimate Solution for Managing Your Business Inventory</h1>
                        <h3 className='text-[18px] mt-[10px]'>A modern, technology-driven system designed to help you monitor and manage stock efficiently.</h3>
                        <p className='text-[14px] mt-[15px] text-justify'>If your inventory and product information feel chaotic, our inventory management system is the perfect solution for you. Designed for businesses of all sizes, it simplifies stock tracking, product addition, and transaction history management.
                            Our system goes beyond basic inventory management. It helps you analyze stock data, provides real-time notifications, and assists in making informed decisions to keep your operations running smoothly.</p>

                            <button className='bg-orange-300 text-slate-600 font-bold px-[10px] py-[5px] rounded-lg mt-[30px]'>Get Started</button>
                    </div>
                    <div className='col-span-6 w-full h-screen items-center justify-center flex'>
                        <img className='w-[60%] h-[60%] rounded-full  object-cover place-content-center z-50 border-2 border-white' src="images/sitehome.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home