import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigationmenu from './components/Navigationmenu'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'


function Layout({children}){
  return(
    <div className='relative overflow-x-hidden'>
    <Navigationmenu/>
    {children}
    <Footer/>

    </div>
  )
}
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout> <Home /> </Layout>}></Route>
          <Route path='/login' element={<Layout> <Login /> </Layout>}></Route>
          <Route path='/contact' element={<Layout> <Contact /> </Layout>}></Route>
          <Route path='/about' element={<Layout> <About/></Layout>}></Route>
          <Route path='/signup' element={<Layout> <SignUp/></Layout>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
