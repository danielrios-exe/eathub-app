import { beautifyDate } from '../../functions/dates';
import { IconButton } from '@material-tailwind/react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import API from '../../API/environment';

interface CommentProps {
  comments: CommentObject[];
}

interface CommentObject {
  id: number;
  text: string;
  likes_count: number;
  created_at: string;
  user_id: number;
  post_id: number;
  username: string;
  name: string;
  last_name: string;
}

const Comment = ({ comments }: CommentProps) => {
  const onLikeComment = async (e: any, comment: CommentObject) => {
    e.preventDefault();

    const request = await API.API_URL.put(
      `post/${comment.post_id}/comment/${comment.id}/like`
    );

    if (request.data.success) {
      window.location.reload();
    }
  };

  return (
    <div className="divide-y w-full">
      {comments && comments.length > 0
        ? comments.map((comment) => {
            return (
              <div className="flex flex-col items-start w-full gap-1 px-5 py-3 my-1.5 divide-indigo-50 divide-y-2 bg-gray-100 rounded-2xl">
                <div className="flex flex-col justify-between gap-0">
                  <div className="flex flex-row justify-between gap-1">
                    <span className=" text-xs font-semibold">
                      {comment.username}
                    </span>
                  </div>
                  <div className="flex flex-row justify-between gap-1">
                    <span className="text-xs text-gray-500">
                      {beautifyDate(comment.created_at)}
                    </span>
                  </div>
                </div>
                <div className="w-full flex justify-between py-0 items-center">
                  <span className="text-xs">{comment.text}</span>
                  <div className="flex flex-row gap-1 justify-center">
                    <IconButton
                      onClick={(e) => onLikeComment(e, comment)}
                      variant="text"
                      color="indigo"
                      size="sm"
                    >
                      <HandThumbUpIcon strokeWidth={2} className="w-5 h-5" />
                    </IconButton>
                    <span className="text-xs">{comment.likes_count}</span>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Comment;
