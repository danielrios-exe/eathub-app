import { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import MenuComponent from '../../components/Menu/Menu';
import API from '../../API/environment';
import { Menu } from '../../components/Menu/Menu/menu-types';
import ReviewComponent from '../../components/Review/ReviewsComponent';

const MenuPageComponent = () => {
  const [menu, setMenu] = useState<Menu>();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const token = localStorage.getItem('token');
    // Bearer
    API.API_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const request = await API.API_URL.get(
      `/menu?restaurant_id=${getRestaurantId()}`
    );

    if (request.data.success) {
      setMenu(request.data.menu);
    }
  };

  const getRestaurantId = () => {
    const url = new URL(window.location.href);
    const restaurantId: string = url.searchParams.get('restaurantId') as string;
    return restaurantId;
  };

  return (
    <Wrapper>
      {menu ? <MenuComponent menu={menu} /> : null}
      <ReviewComponent />
    </Wrapper>
  );
};

export default MenuPageComponent;
