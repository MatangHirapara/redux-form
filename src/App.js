import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>

  )
}
