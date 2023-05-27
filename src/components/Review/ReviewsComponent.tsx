import { useEffect, useState } from 'react';
import API from '../../API/environment';

interface Review {
  id: number;
  text: string;
  stars: string;
  created_at: string;
  reviewer_id: number;
  reviewee_id: number;
  username: string;
}
interface ReviewComponentProps {
  restaurantId: number;
}
const ReviewComponent = ({ restaurantId }: ReviewComponentProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const request = await API.API_URL.get(`/review?user_id=${restaurantId}`);

    if (request.data.success) {
      setReviews(request.data.reviews);
      console.log('reviews', request.data.reviews);
    }
  };

  const createYellowStar = () => {
    return (
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  };

  const createBlackStar = () => {
    return (
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-300 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fifth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  };

  const StarComponent = (stars: string) => {
    const goldStarsNumber = parseInt(stars);
    const blackStarsNumber = 5 - goldStarsNumber;
    return (
      <div className="flex items-center">
        {Array.from(Array(goldStarsNumber), (_, i) => {
          return createYellowStar();
        })}
        {Array.from(Array(blackStarsNumber), (_, i) => {
          return createBlackStar();
        })}
      </div>
    );
  };

  return (
    <div className="w-full">
      {reviews &&
        reviews.map((review) => {
          return (
            <div className="flex min-h-full flex-1 flex-col justify-center py-3 px-3 mt-0 mb-8 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
              <div className="flex flex-col w-full items-start">
                <span className="text-sm font-semibold">{review.username}</span>
                <span className="text-xs text-gray-500">
                  {review.created_at}
                </span>
                <div className="flex flex-row justify-between mt-3 w-full">
                  <span className="text-sm">{review.text}</span>
                  {StarComponent(review.stars)}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ReviewComponent;
