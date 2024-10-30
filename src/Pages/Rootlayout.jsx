import React from 'react'
import { Header } from '../Components/Header'
import { Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
      <Header />
      <Outlet />

    </div>
  )
}

export default Rootlayout
