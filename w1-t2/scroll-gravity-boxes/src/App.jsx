import { useState } from 'react'
import React from 'react'
import './App.css'
import { Helmet } from 'react-helmet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <title>Scroll Gravity Boxes</title>
      </Helmet>
      <h1 class="text-3xl font-bold text-red-300">
        Hello world!
      </h1>

    </>
  )
}

export default App
