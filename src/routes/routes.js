import React from 'react';

import {
  Routes,
  Route  
} from 'react-router-dom';
import Article from '../pages/Article/Article';
import Home from '../pages/Home/Home'
import NotFound from '../pages/Notfound/Notfound'
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Contents from '../pages/Contents/Contents';

export const Rotas = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/article' element={<Article />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/contents' element={<Contents />} />
    </Routes>
  )
}