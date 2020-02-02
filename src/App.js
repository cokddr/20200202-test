import React, { useState } from 'react'
import Navbar from './navbar'

function App() {
  const [title, setTitle] = useState('App 페이지의 Navbar')

  return (
    <div>
      <Navbar title={title} />
    </div>
  )
}

export default App
