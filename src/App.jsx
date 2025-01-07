import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loginpage from './pages/Loginpage'
import Registrationpage from './pages/Registrationpage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registrationpage />} />
          <Route path='/login' element={<Loginpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App