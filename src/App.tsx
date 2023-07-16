import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DetailsList from './components/DetailsList'
import Main from './pages/MainPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/beer/:id' element={<DetailsList />}/>
      </Routes>
    </>
  )
}

export default App
 