import React from 'react'
import Container from '../common/Container'

function Registration() {
  return (
    <Container>
      <h1 className='text-5xl font-bold mt-[10px] text-center'>Register for save your business</h1>
      <div className='grid grid-cols-12 items-center gap-10 mt-[20px]'>
        <div className='col-span-6'>
          <img className='w-full h-full' src="/images/registration.jpg" alt="" />
        </div>

        <div className='col-span-6 w-[60%] flex flex-col gap-[20px]'>

          <div className='flex flex-col'>
            <label className='text-xl font-bold' htmlFor="photo">Set your shop image</label>
            <input type="file" name="photo" id="photo" />
          
          </div>

          <div className='flex flex-col'>
            <label className='text-xl font-bold' htmlFor="fullName">FullName</label>
            <input className='outline-none bg-transparent border-2 rounded-lg px-5 py-2' type="text" name="fullname" id="fullName" placeholder='Enter your fullName' />
          </div>

          <div className='flex flex-col'>
            <label className='text-xl font-bold' htmlFor="email">Email</label>
            <input className='outline-none bg-transparent border-2 rounded-lg px-5 py-2' type="text" name="email" id="email" placeholder='Enter your email' />
          </div>

          <div className='flex flex-col'>
            <label className='text-xl font-bold' htmlFor="password">Password</label>
            <input className='outline-none bg-transparent border-2 rounded-lg px-5 py-2' type="text" name="password" id="password" placeholder='Enter your password' />
          </div>

        </div>

      </div>

    </Container>

  )
}

export default Registration