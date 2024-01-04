import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Outlet } from 'react-router-dom'

import Login from './components/account/Login'
import DataProvider from './context/DataProvider'
import Home from './components/home/Home'
import Header from './components/Header/Header'
import CreatePost from './components/create/CreatePost'

const PrivateRoute = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : null;
};





function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <DataProvider>

      <BrowserRouter>

        <Routes>

          <Route path='/login' element={<Login isUserAuthenticated={setIsAuthenticated} />} />

          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/create' element={<CreatePost />} />
          </Route>

          {/* <Route path='/create' element={<CreatePost />} /> */}
        </Routes>

      </BrowserRouter>

    </DataProvider>
  )
}

export default App