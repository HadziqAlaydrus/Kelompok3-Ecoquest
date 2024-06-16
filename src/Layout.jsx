import React from 'react'
import Navigationmenu from './components/Navigationmenu'
import Home from './pages/Home'

function Layout({children}) {
  return (
    <div>
        <Navigationmenu/>
        <Home/>
    </div>
  )
}

export default Layout