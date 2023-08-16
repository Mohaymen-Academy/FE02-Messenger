import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import Navigate from react-router-dom
import routes from './Routes/Routes'
import Login from '../Pages/Login';
import React, { useState, useEffect } from "react";

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token != null) {
      setIsAuth(true);
      console.log("token", token);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.Private ? (
                isAuth ? (
                  <route.component />
                ) : (
                  <Login/>
                )
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;