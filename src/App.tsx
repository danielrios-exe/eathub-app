import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import LoginComponent from './pages/Login';
import FeedComponent from './pages/Feed';
import RestaurantComponent from './pages/Restaurant';
import ProfileComponent from './pages/Profile';
import NotFoundComponent from './pages/NotFound';
import LogoutComponent from './pages/Logout';
import Navbar from './components/Navbar';
import MenuPage from './pages/Menu';
import RegisterComponent from './pages/Register';

const Routes = () => {
  let routes = useRoutes([
    { path: '/', element: <LoginComponent /> },
    { path: '/home', element: <FeedComponent /> },
    { path: '/restaurants', element: <RestaurantComponent /> },
    { path: '/reviews', element: <RestaurantComponent /> },
    { path: '/profile', element: <ProfileComponent /> },
    { path: '/menu', element: <MenuPage /> },
    { path: '/logout', element: <LogoutComponent /> },
    { path: '/register', element: <RegisterComponent /> },

    { path: '*', element: <NotFoundComponent /> },
  ]);
  return routes;
};

const App = () => {
  const isLogged = localStorage.getItem('isLogged');

  return (
    <ThemeProvider>
      <BrowserRouter>
        {isLogged === 'true' ? <Navbar /> : null}
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
