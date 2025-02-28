import React from 'react'
import Header from './components/header/header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
    <Header/>
    <div className='min-h-[70vh] h-full '> 
    <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default Layout