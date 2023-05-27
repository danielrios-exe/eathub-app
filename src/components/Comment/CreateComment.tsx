import { useState } from 'react';
import { IconButton } from '@material-tailwind/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import API from '../../API/environment';

interface CreateCommentProps {
  postId: number;
}

const CreateComment = ({ postId }: CreateCommentProps) => {
  const [comment, setComment] = useState('');

  const onComment = async (e: any) => {
    e.preventDefault();
    const body = {
      text: comment,
      user_id: localStorage.getItem('userId'),
    };

    const request = await API.API_URL.post(`post/${postId}/comment`, body);

    if (request.data.success) {
      setComment('');
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-row gap-2 justify-center space-between mb-2 ">
      <input
        id="comment"
        placeholder="Escribe un comentario..."
        name="email"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-s ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1.7 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
      />
      <IconButton
        variant="text"
        color="indigo"
        size="sm"
        onClick={(e) => {
          onComment(e);
        }}
      >
        <PencilSquareIcon strokeWidth={2} className="w-5 h-5" />
      </IconButton>
    </div>
  );
};

export default CreateComment;
