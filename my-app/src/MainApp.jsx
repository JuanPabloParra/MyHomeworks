import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import NavComponent from './NavComponent';

export const MainApp = () => {
  return (
    <BrowserRouter>
      <h1> MainApp </h1>
      <hr />
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </BrowserRouter>
  );
};


