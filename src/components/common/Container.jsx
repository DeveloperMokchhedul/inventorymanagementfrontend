import React from 'react'
import cn from '../../utils/cn'

function Container({ children,className }) {
    return (
        <div className={cn(`px-[150px]`, className)}>
            {children}
        </div>
    )
}

export default Container
