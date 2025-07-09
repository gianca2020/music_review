//import { useState } from 'react'
import Taskbar from './components/Taskbar'
import Feature from './components/feature'
import './App.css'
import AlbumCover from './components/AlbumCover'
import AlbumCoverCard from './components/AlbumCoverCard'

function App() {
  

  return (
    <>
    <div className="bg-[#F0F4F8] min-h-screen">
      <Taskbar></Taskbar>
      <Feature></Feature>
      <AlbumCover></AlbumCover>  
      </div>
    </>
  )
}

export default App
