import React from 'react';
import { Link, NavLink,  Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { useReducer } from 'react';
import { UserRoutes } from './UserRoutes';

export const AppRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<UserRoutes />} />

      </Routes>
    </>
      
  
  )
};


