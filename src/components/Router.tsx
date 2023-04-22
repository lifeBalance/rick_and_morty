import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterLayout } from './RouterLayout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Character } from '../pages/Character'
import { Register } from '../pages/Register'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<RouterLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/*' element={<div>404: Not Found</div>} />
    </Routes>
  )
}
