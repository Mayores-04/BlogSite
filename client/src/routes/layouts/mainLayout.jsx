import React from 'react'
import './app.css'
import LeftBar from '../../components/leftBar';
import TopBar from '../../components/topBar';
import { Outlet } from 'react-router';

const mainLayout = () => {
  return (
    <div className="flex h-screen">
    <aside className="w-20 h-[100%]">
      <LeftBar />
    </aside>

    <div className="flex-1 flex flex-col">
      <TopBar />
      
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  </div>
  )
}

export default mainLayout