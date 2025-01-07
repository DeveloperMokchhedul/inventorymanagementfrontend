import React from 'react'
import { Link } from 'react-router-dom'
import Container from './common/Container'
import Button from './common/Button'

function Navbar() {
    return (
        <div className=''>
            <Container>
                <nav className='flex justify-between h-[70px] items-center'>
                    <div>
                        <h1 className='text-5xl font-bold text-orange-300'><Link to={"/"}>Hisab</Link></h1>
                    </div>
                    <div>
                        <ul className='flex items-center justify-center gap-5'>
                            <Button><Link to={"/login"}>Login</Link></Button>
                            <Button><Link to={"/registration"}>registration</Link></Button>
                        </ul>
                    </div>
                </nav>
            </Container>

        </div>
    )
}

export default Navbar