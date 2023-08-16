import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Navigate from react-router-dom
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import routes from './Routes/Routes';
import Login from '../Pages/Login';

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  const stateToken = useSelector((state) => state.profile.jwt);
  useEffect(() => {
    if (stateToken !== '') {
      setIsAuth(true);
      console.log('Stoken', stateToken);
    }
  }, [isAuth]);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.Private ? isAuth ? <route.component /> : <Login /> : <route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
