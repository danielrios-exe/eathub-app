import { Textarea, IconButton } from '@material-tailwind/react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import Wrapper from '../../Wrapper';
import { useState, useEffect } from 'react';
import API from '../../../API/environment';
import { isRestaurant } from '../../../functions/auth';

interface MealType {
  id: number;
  name: string;
}

interface MenuDetail {
  name: string;
  price: number;
  meal_type_id: number;
}

interface Menu {
  title: string;
  subtitle: string;
  start_date: Date;
  end_date: Date;
  restaurant_id: number;
  menu_details: MenuDetail[];
}

const CreateMenu = () => {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [mealType, setMealType] = useState<MealType>();
  const [mealTypes, setMealTypes] = useState<MealType[]>([]);
  const [menuDetails, setMenuDetails] = useState<MenuDetail[]>([]);

  useEffect(() => {
    if (!isRestaurant()) {
      window.location.href = '/';
    }

    getMealTypes();
  }, []);

  useEffect(() => {
    console.log('mealType', mealType);
  }, [mealType]);

  const getMealTypes = async () => {
    console.log('test', API.API_URL.defaults.headers.common['Authorization']);

    const request = await API.API_URL.get('/menu/mealTypes');

    console.log('request', request);
    if (request.data.success) {
      setMealTypes(request.data.mealTypes);
    }
  };

  const addMenuDetail = () => {
    console.log('addMenuDetail');
    const menuDetail: MenuDetail = {
      name: name,
      price: price,
      meal_type_id: mealType?.id || 6, // Platos principales
    };

    setMenuDetails([...menuDetails, menuDetail]);
    setName('');
    setPrice(0);
    setMealType(undefined);
  };

  const createMenu = async () => {
    const body: Menu = {
      title: title,
      subtitle: subtitle,
      start_date: new Date(),
      end_date: new Date(),
      restaurant_id: parseInt(localStorage.getItem('userId') || '1'),
      menu_details: menuDetails,
    };

    const request = await API.API_URL.post('/menu', body);

    if (request.data.success) {
      window.location.href = '/profile';
      setTitle('');
      setSubtitle('');
      setMenuDetails([]);
    }
  };

  return (
    <div className="w-fullm min-h-full flex flex-col items-center">
      <span className="text-2xl mb-5 text-indigo-400">
        Configuración básica del menú
      </span>
      <div className="flex min-h-full mb-5 flex-1 flex-col justify-center px-8 py-3 mt-0 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
        <div className="flex flex-row space-between gap-3">
          <input
            id="title"
            placeholder="Título del menú"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-s ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1.7 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          />
          <input
            id="subtitle"
            placeholder="Subtítulo del menú"
            name="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-s ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1.7 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            disabled={title === '' || subtitle === ''}
            onClick={createMenu}
            className="flex w-40 justify-center rounded-md bg-indigo-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Publicar
          </button>
        </div>
      </div>
      <span className="text-2xl mb-5 text-indigo-400">Platillos</span>
      <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-3 mt-0 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
        <div className="flex flex-row space-between gap-3 mt-2">
          <input
            id="name"
            placeholder="Nombre del platillo"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-s ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1.7 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          />
          <input
            id="price"
            prefix="$"
            placeholder="Precio del platillo"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-s ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1.7 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          />
          <select
            id="mealTypes"
            value={mealType?.id}
            onChange={(e) => {
              const mealType = mealTypes.find(
                (mealType) => mealType.id === parseInt(e.target.value)
              );
              setMealType(mealType);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {mealTypes &&
              mealTypes.map((mealType) => {
                return <option value={mealType.id}>{mealType.name}</option>;
              })}
          </select>
          <button
            type="submit"
            onClick={addMenuDetail}
            className="flex w-60 justify-center rounded-md bg-indigo-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar
          </button>
        </div>
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-8 py-3 mt-3 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
        <div className="flex flex-col space-between gap-3 w-full">
          <div className="grid grid-cols-3 gap-3 mb-5 text-gray-500 font-mono">
            <span>Nombre del platillo</span>
            <span>Precio</span>
            <span>Tipo de platillo</span>
          </div>
        </div>
        <div className="flex flex-col space-between gap-3 w-full">
          {menuDetails &&
            menuDetails.map((menuDetail) => {
              return (
                <div className="flex flex-col border-b-2">
                  <div className="grid grid-cols-3 gap-3 text-gray-800 font-mono italic mt-2">
                    <span>{menuDetail.name}</span>
                    <span>${menuDetail.price}</span>
                    <span>
                      {
                        // Display menuDetail meal type name
                        mealTypes.find(
                          (mealType) => mealType.id === menuDetail.meal_type_id
                        )?.name
                      }
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
