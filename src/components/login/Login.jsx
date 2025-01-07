import React from 'react'
import Container from '../common/Container'

function Login() {
  return (
    <div>
      <Container>
        <h1 className='text-5xl font-bold mt-[10px] text-center'>Login your acouont</h1>
        <div className='grid grid-cols-12 items-center gap-10 mt-[20px]'>
          <div className='col-span-6'>
            <img className='w-full h-full' src="/images/registration.jpg" alt="" />
          </div>

          <div className='col-span-6 w-[60%] flex flex-col gap-[20px]'>
            
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

    </div>
  )
}

export default Login