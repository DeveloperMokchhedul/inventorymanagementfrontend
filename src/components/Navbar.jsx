import React from 'react'

function Navbar() {
  return (
    <div className='px-[150px]'>
        <nav className='flex justify-between h-[70px] items-center'>
            <div>
                <h1 className='text-5xl font-bold text-orange-300'>Hisab</h1>
            </div>

            <div>
                <ul className='flex items-center justify-center gap-5'>
                    <li className='bg-orange-400 font-bold text-white px-[20px] py-[7px] rounded-lg' >Login</li>
                    <li className='bg-orange-400 font-bold text-white px-[20px] py-[7px] rounded-lg' >registration</li>
                </ul>

            </div>
        </nav>
    </div>
  )
}

export default Navbar