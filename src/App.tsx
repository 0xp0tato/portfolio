import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import TechStack from './components/TechStack/TechStack'

import "./App.css"
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <TechStack/>
    </div>
  )
}

export default App