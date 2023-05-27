import { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import MenuComponent from '../../components/Menu/Menu';
import API from '../../API/environment';
import { Menu } from '../../components/Menu/Menu/menu-types';
import ReviewComponent from '../../components/Review/ReviewsComponent';
import { CreateReviewComponent } from '../../components/Review';

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

  const roleId = localStorage.getItem('roleId');

  return (
    <Wrapper>
      {menu ? <MenuComponent menu={menu} /> : null}
      {menu ? <ReviewComponent restaurantId={menu?.restaurant_id} /> : null}
      {menu && roleId !== '3' ? (
        <CreateReviewComponent restaurantId={menu?.restaurant_id} />
      ) : null}
    </Wrapper>
  );
};

export default MenuPageComponent;
