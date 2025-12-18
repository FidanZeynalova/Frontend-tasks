import React from 'react'
import './App.css'
import { Helmet } from 'react-helmet'
import Header from './companents/Header/Header'
import Navbar from './companents/Navbar/Navbar'
import Main from './companents/Main/Main'

function App() {

  return (
    <>
      <Helmet>
        <title>Kanban Task Manager</title>
      </Helmet>
      <Navbar />
      <Header />
      <Main />
    </>
  )
}

export default App
