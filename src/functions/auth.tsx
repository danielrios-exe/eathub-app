export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  return false;
};

export const isRestaurant = () => {
  const roleId = localStorage.getItem('roleId');
  if (roleId === '3') {
    return true;
  }
  return false;
};
