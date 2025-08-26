import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header'

export default function Home() {
  return (
    <div>
   <Header></Header>
    <Outlet></Outlet>
    </div>
  )
}
