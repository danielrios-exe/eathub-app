import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import API from '../../API/environment';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'true') {
      window.location.href = '/home';
    }
  }, []);

  const onLogin = async (e: any) => {
    e.preventDefault();
    // Build default headers
    API.setOAuthHeadersConfiguration();
    // Build auth headers
    API.AUTH_URL.defaults.headers.common['Authorization'] = authenticateUser();
    // Request token
    const request = await API.AUTH_URL.post('/token');
    console.log('request', request);

    if (request.data.success) {
      // Store needed data
      localStorage.setItem('token', request.data.token);
      localStorage.setItem('email', request.data.user.email);
      localStorage.setItem('userId', request.data.user.id);
      localStorage.setItem('username', request.data.user.username);
      localStorage.setItem('roleId', request.data.user.role_id);
      localStorage.setItem('isLogged', 'true');
      API.setAPIHeadersConfiguration();
      //redirect to home
      window.location.href = '/home';
    }
  };

  const authenticateUser = () => {
    const token = username + ':' + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    const hash = btoa(token);

    return 'Basic ' + hash;
  };

  return (
    <Wrapper className="flex h-full w-full">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 mt-40 lg:px-8 bg-white w-3/6 rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-1 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
            eathub
          </h1>
          <h2 className="mt-3 text-center text-lg font-bold leading-9 tracking-tight text-indigo-500 font-sans">
            Inicia sesión
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usuario
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(e) => onLogin(e)}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Aún no eres parte?{' '}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-500 hover:text-indigo-500"
            >
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginComponent;
