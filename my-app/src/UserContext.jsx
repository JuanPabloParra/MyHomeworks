import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({ user: null, setUser: () => {} });

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    setUser({
      id: 313,
      name: 'Jonathan Lopez',
      email: 'jlopez0313@hotmail.com'
    });

    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, {
      replace: true
    });
  };

  return (
    <>
      <div>Login Page</div>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className='btn btn-primary' onClick={() => onLogin()}>
        Login
      </button>
    </>
  );
};
