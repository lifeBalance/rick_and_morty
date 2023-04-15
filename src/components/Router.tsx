import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { RouterLayout } from './RouterLayout'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<RouterLayout />}>
        <Route path='/' element={<Home />} />
      </Route>

      <Route path='/login' element={<Login />} />

      <Route path='/*' element={<div>404: Not Found</div>} />
    </Routes>
  )
}
