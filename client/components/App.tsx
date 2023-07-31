import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
