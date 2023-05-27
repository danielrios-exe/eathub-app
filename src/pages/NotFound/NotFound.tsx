import React from 'react';
import Wrapper from '../../components/Wrapper';

const NotFoundComponent = () => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-29 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          No tenemos lo que estás buscando {':('}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          No te preocupes, no era parte del proyecto
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Regresar a inicio
          </a>
          <a href="/" className="text-sm font-semibold text-gray-900">
            Contactar soporte<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFoundComponent;
