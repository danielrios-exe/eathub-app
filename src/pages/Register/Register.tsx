import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import API from '../../API/environment';

const RegisterComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [roleId, setRoleId] = useState(1);

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'true') {
      window.location.href = '/home';
    }
  }, []);

  const onRegister = async (e: any) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
      name: name,
      lastName: lastName,
      email: email,
      roleId: roleId,
    };

    const request = await API.AUTH_URL.post('/register', body);
    console.log('request', request);

    if (request.data.success) {
      // Store needed data
      localStorage.setItem('token', request.data.token);
      localStorage.setItem('email', request.data.user.email);
      localStorage.setItem('userId', request.data.user.id);
      localStorage.setItem('username', request.data.user.username);
      localStorage.setItem('roleId', roleId.toString());
      localStorage.setItem('isLogged', 'true');
      API.setAPIHeadersConfiguration();
      //redirect to home
      window.location.href = '/home';
    }
  };

  return (
    <Wrapper className="flex h-full w-full">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-8 pb-10 mt-5 lg:px-8 bg-white w-3/6 rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className=" text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
            eathub
          </h1>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usuario
              </label>
              <div className="mt-1">
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
              <div className="mt-1">
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
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Apellido
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ¿Qué tipo de usuario eres?
              </label>
              <div className="mt-1">
                <select
                  id="roleId"
                  value={roleId}
                  onChange={(e) => {
                    setRoleId(parseInt(e.target.value));
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={2}>Comensal</option>
                  <option value={3}>Restaurant</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(e) => onRegister(e)}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterComponent;
