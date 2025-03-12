import React from 'react'
import './app.css'
import LeftBar from '../../components/LeftBar/LeftBar';
import TopBar from '../../components/TopBar/TopBar';
import { Outlet } from 'react-router';

const mainLayout = () => {
  return (
    <div className="flex h-screen">
    <aside className="w-20 h-[100%] z-100">
      <LeftBar />
    </aside>

    <div className="flex-1 flex flex-col">
      <TopBar />
      
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  </div>
  )
}

export default mainLayout