
import type { FC } from 'react'
import './App.css'
import Navbar from './app-components/comp/navbar.tsx'
import Banner from './app-components/comp/banner.tsx'
import MainContent from './app-components/content/main-content.tsx'
import Footer from './app-components/comp/footer.tsx'
const App: FC = () => {
  

  return (
    <>
      <Navbar />
      <Banner />
      <MainContent />
      <Footer author='John Cena' />
    </>
  )
}

export default App
