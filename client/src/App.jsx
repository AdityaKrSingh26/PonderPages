import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/account/Login'
import DataProvider from './context/DataProvider'
import Home from './components/home/Home'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App