import { useState, useEffect } from 'react';
import Wrapper from '../../components/Wrapper';
import RestaurantCard from '../../components/RestaurantCard';
import API from '../../API/environment';

const RestaurantComponent = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const token = localStorage.getItem('token');
    // Bearer
    API.API_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const request = await API.API_URL.get('/restaurant');

    if (request.data.success) {
      setRestaurants(request.data.restaurants);
    }
  };

  return (
    <Wrapper>
      {restaurants && <RestaurantCard restaurants={restaurants} />}
    </Wrapper>
  );
};

export default RestaurantComponent;
