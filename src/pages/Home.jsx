import React from 'react'
import Chat from "../components/Chat.jsx"
import Sidebar from "../components/Sidebar.jsx"

const Home = () => {
  return (
    <div className="home">
      <div className="container">
   <Sidebar></Sidebar>
   <Chat></Chat>
      </div>
    </div>
  )
}

export default Home