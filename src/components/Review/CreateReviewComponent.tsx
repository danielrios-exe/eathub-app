import { useEffect, useState } from 'react';
import API from '../../API/environment';
import { IconButton } from '@material-tailwind/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

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
const CreateReviewComponent = ({ restaurantId }: ReviewComponentProps) => {
  const [comment, setComment] = useState('');
  const [hoverStar, setHoverStar] = useState('');
  const [stars, setStars] = useState('');

  const getStarStyle = (star: string) => {
    if (
      parseInt(star) <= parseInt(hoverStar) ||
      parseInt(star) <= parseInt(stars)
    ) {
      return 'w-5 h-5 text-yellow-500';
    } else {
      return 'w-5 h-5 text-gray-300 hover:text-yellow-500';
    }
  };

  const onCreateReview = async (e: any) => {
    e.preventDefault();
    const body = {
      text: comment,
      stars: stars,
      reviewer_id: localStorage.getItem('userId'),
      reviewee_id: restaurantId,
    };

    const request = await API.API_URL.post('/review', body);

    if (request.data.success) {
      setComment('');
      window.location.reload();
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-3 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
      <div className="flex flex-row gap-2 justify-center space-between ">
        <input
          id="comment"
          placeholder="Deja tu reseña..."
          name="email"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-s ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1.7 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        />
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className={getStarStyle('1')}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={(e) => {
              setHoverStar('1');
            }}
            onClick={(e) => setStars('1')}
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className={getStarStyle('2')}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={(e) => {
              setHoverStar('2');
            }}
            onClick={(e) => setStars('2')}
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className={getStarStyle('3')}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={(e) => {
              setHoverStar('3');
            }}
            onClick={(e) => setStars('3')}
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className={getStarStyle('4')}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={(e) => {
              setHoverStar('4');
            }}
            onClick={(e) => setStars('4')}
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className={getStarStyle('5')}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={(e) => {
              setHoverStar('5');
            }}
            onClick={(e) => setStars('5')}
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <IconButton
          variant="text"
          color="indigo"
          size="sm"
          onClick={(e) => {
            onCreateReview(e);
          }}
        >
          <PencilSquareIcon strokeWidth={2} className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  );
};
export default CreateReviewComponent;
