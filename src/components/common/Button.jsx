import React from 'react'
import cn from '../../utils/cn'


function Button({ children, className, onClick }) {
  return (
    <>
      <button className={cn(`px-[20px] py-[7px] bg-orange-400 text-secondary items-center text-white font-bold rounded-[6px]`, className)}>
        {children}
      </button>

    </>
  )
}

export default Button