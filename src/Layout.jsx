import React from 'react'
import Navigationmenu from './components/Navigationmenu'

function Layout({children}) {
  return (
    <div>
        <Navigationmenu/>
        <Home/>
    </div>
  )
}

export default Layout