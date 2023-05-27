// import axios, { AxiosResponse } from 'axios';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const appMode = 'PRODUCTION';

export const getUrl = () => {
  let AUTH_URL: string, API_URL: string, APP_URL: string;

  if (appMode === 'PRODUCTION') {
    AUTH_URL = 'https://eathub-backend-danielrios-exe.vercel.app/api/auth';
    API_URL = 'https://eathub-backend-danielrios-exe.vercel.app/api/';
    APP_URL = '';
  } else {
    AUTH_URL = 'http://localhost:5001/api/auth';
    API_URL = 'http://localhost:5001/api';
    APP_URL = '';
  }

  return {
    AUTH_URL,
    API_URL,
    APP_URL,
  };
};

const APP_URL = getUrl().APP_URL;

const setOAuthHeadersConfiguration = async () => {
  AUTH_URL.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';
  API_URL.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  API_URL.defaults.headers.common['Access-Control-Allow-Headers'] =
    'Authorization, X-Requested-With, Content-Type, Accept';
  API_URL.defaults.headers.common['Access-Control-Allow-Methods'] =
    'GET, POST, PUT, DELETE, OPTIONS';
  API_URL.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  API_URL.defaults.headers.common['Accept'] = '*/*';
};

const setAPIHeadersConfiguration = async () => {
  const token = localStorage.getItem('token');
  // Bearer
  API_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  API_URL.defaults.headers.common['Content-Type'] = 'application/json';
  API_URL.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  API_URL.defaults.headers.common['Access-Control-Allow-Headers'] =
    'Authorization, X-Requested-With, Content-Type, Accept';
  API_URL.defaults.headers.common['Access-Control-Allow-Methods'] =
    'GET, POST, PUT, DELETE, OPTIONS';
  API_URL.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  API_URL.defaults.headers.common['Accept'] = '*/*';
};

function addIntercerptor() {
  API_URL.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },
    function (error: any) {
      if (401 === error.response.status) {
        window.location.reload();
      } else {
        return Promise.reject(error);
      }
    }
  );
}

const AUTH_URL = axios.create({
  baseURL: getUrl().AUTH_URL,
});

const API_URL = axios.create({
  baseURL: getUrl().API_URL,
});

interface APIInterface {
  AUTH_URL: AxiosInstance;
  API_URL: AxiosInstance;
  appMode: string;
  APP_URL: string;
  addIntercerptor: () => void;
  setOAuthHeadersConfiguration: () => void;
  setAPIHeadersConfiguration: () => void;
}

const API: APIInterface = {
  AUTH_URL,
  API_URL,
  appMode,
  APP_URL,
  addIntercerptor,
  setOAuthHeadersConfiguration,
  setAPIHeadersConfiguration,
};

export default API;
