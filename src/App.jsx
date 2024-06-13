import { useState } from 'react'
// import './App.css'
import HomePage from './HomePage/HomePage.jsx'
import NavBar from './NavBar/NavBar.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <HomePage />

      <Footer />
    </>
  )
}

export default App
