interface RestaurantCardProps {
  restaurants: Restaurant[];
}

interface Restaurant {
  id: number;
  username: string;
  details_count: number;
  review_count: number;
}

const RestaurantCard = ({ restaurants }: RestaurantCardProps) => {
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
    'https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage121578650-50-vb1864323-GRBSKSouthPlaceAugust202114-2-Copy.jpg',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    'https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg',
    'https://media.istockphoto.com/id/1211547141/photo/modern-restaurant-interior-design.jpg?s=612x612&w=0&k=20&c=CvJmHwNNwfFzVjj1_cX9scwYsl4mnVO8XFPi0LQMTsw=',
    'https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg',
    'https://images.squarespace-cdn.com/content/v1/5b3b81569772aec4debee2d9/1580149284255-ER08MWUFDPB90QWBH9DD/Sofitel_Montreal_Renoir_Restaurant_4.jpg?format=2500w',
    'https://media.timeout.com/images/105973338/image.jpg',
  ];

  const mapImage =
    'https://previews.123rf.com/images/charnsitr/charnsitr1709/charnsitr170900001/85049051-vector-illustration-of-gps-city-map.jpg';
  return (
    <div className="flex flex-col justify-center items-center w-4/6">
      {restaurants.map((restaurant) => {
        return (
          <div className="flex min-h-full flex-1 flex-col justify-center py-3 px-3 mt-0 mb-8 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
            <div className="flex flex-row justify-between max-h-30">
              <div className="flex justify-center self-center w-3/6 mr-">
                <img
                  className=" object-cover w-full max-h-30 rounded-s rounded-br-sm rounded-bl-sm rounded-tr-sm rounded-tl-"
                  alt={`img-${restaurant.id}`}
                  src={images[Math.floor(Math.random() * images.length)]}
                />
              </div>
              <div className="flex flex-col ml-4 w-full items-start bg-gray-100 rounded-2xl p-3">
                <div className="flex flex-row justify-between w-full h-fit max-h-30">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold mb-2">
                      {restaurant.username}
                    </span>
                    <span className="text-xs text-gray-500">
                      {restaurant.details_count} platillos
                    </span>
                    <span className="text-xs text-gray-500 mb-2">
                      {restaurant.review_count} reviews
                    </span>
                    <span className="text-xs text-blue-950 hover:underline">
                      {/* takae user to menu */}
                      <a href={`/menu?restaurantId=${restaurant.id}`}>
                        Ir al restaurante
                      </a>
                    </span>
                  </div>
                  <div className="flex flex-col items-center h-full w-3/6">
                    <img
                      className=" object-cover h-full rounded-s shadow-lg rounded-tl- max-h-30 max-w-10 self-center items-center"
                      alt={`img-map-${restaurant.id}`}
                      src={mapImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
