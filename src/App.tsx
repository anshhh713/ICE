import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './app-components/navbar.tsx'
import Banner from './app-components/banner.tsx'
function App() {
  

  return (
    <>
      <Navbar />
      <Banner />
    </>
  )
}

export default App
