export interface GroupedDetails {
  meal_type: string;
  details: MenuDetail[];
}

export interface MenuDetail {
  id: number;
  name: string;
  price: string;
  menu_id: number;
  meal_type: string;
}

export interface Menu {
  id: number;
  title: string;
  subtitle: string;
  start_date: string;
  end_date: string;
  created_at: string;
  restaurant_id: number;
  username: string;
  menu_details: MenuDetail[];
}
