import React, { useEffect } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import './assets/styles/style.scss';

const App = () => {
  const dispatch = useDispatch();
  const userData = localStorage.getItem('userData');

  useEffect(() => {
    dispatch({ type: 'SIGN_IN_USER', payload: userData ? JSON.parse(userData) : null });
  }, []);

  const pages = useRoutes([
    { path: '/', element: !userData ? <SignIn /> : <Navigate to="/dashboard" /> },
    { path: '/sign-up', element: !userData ? <SignUp /> : <Navigate to="/dashboard" /> },
    { path: '/Dashboard', element: userData ? <Dashboard /> : <Navigate to="/" /> },
  ]);

  return pages;
};

export default App;
