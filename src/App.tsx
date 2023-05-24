import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import LoginComponent from './pages/Login';
import FeedComponent from './pages/Feed';
import RestaurantComponent from './pages/Restaurant';
import CustomerComponent from './pages/Customer';
import NotFoundComponent from './pages/NotFoundComponent';

const Routes = () => {
  let routes = useRoutes([
    { path: '/', element: <LoginComponent /> },
    { path: '/home', element: <FeedComponent /> },
    { path: '/restaurant', element: <RestaurantComponent /> },
    { path: '/customer', element: <CustomerComponent /> },
    { path: '*', element: <NotFoundComponent /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
