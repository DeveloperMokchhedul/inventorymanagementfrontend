import React from 'react'
import Container from '../common/Container'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

function DashboardLayout({ children }) {
  return (
    <Container>
      <div className='w-full h-screen flex '>
        <div className='w-[300px] h-full bg-slate-500'>
          <div className='flex flex-col mt-[120px] px-[20px] gap-[20px] w-[250px] mx-auto'>
            <Button><Link to={"/dashboard/show"}>Show All Product</Link></Button>
            <Button><Link to={"/dashboard/add"}>AddProduct</Link></Button>
            <Button><Link to={"/dashboard/sell"}>Sell Product</Link></Button>
            
          </div>

        </div>
        <div className='ml-[50px]'>
          {children}
        </div>
      </div>
    </Container>
  )
}

export default DashboardLayout