import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loginpage from './pages/Loginpage'
import Registrationpage from './pages/Registrationpage'
import Dashboard from './pages/Dashboard'
import AddProductpage from './pages/AddProductpage'
import AllProductPage from './pages/AllProductPage'
import ProductSellPage from './pages/ProductSellPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='dashboard'>
            <Route index element= {<Dashboard />} />
            <Route path='add' element= {<AddProductpage />} />
            <Route path='show' element= {<AllProductPage />} />
            <Route path='sell' element= {<ProductSellPage />} />
          </Route>
     
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registrationpage />} />
          <Route path='/registration' element={<Registrationpage />} />
          <Route path='/login' element={<Loginpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App