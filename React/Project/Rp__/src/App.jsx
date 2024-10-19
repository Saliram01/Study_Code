import React from 'react'
import ContextProvider from './components/context/ContextApi'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ContextProvider>
        <Header/>
        <Outlet/>
        <Footer/>
    </ContextProvider>
  )
}

export default App