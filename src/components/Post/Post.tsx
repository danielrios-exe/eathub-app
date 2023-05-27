import Avatar from '../Avatar';
import { beautifyDate } from '../../functions/dates';
import { Comment, CreateComment } from '../Comment';

interface PostProps {
  posts: Post[];
}

interface Post {
  id: number;
  text: string;
  likes_count: number;
  created_at: string;
  user_id: number;
  username: string;
  name: string;
  last_name: string;
  images: Image[];
  comments: CommentObject[];
}

interface Image {
  id: number;
  url: string;
  post_id: number;
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

const PostComponent = ({ posts }: PostProps) => {
  console.log('child is getting', posts);
  return (
    <div className="w-full flex flex-col items-center">
      {posts && posts.length > 0
        ? posts.map((post: Post) => {
            return (
              <div className="flex flex-col justify-center px-8 py-3 mt-2 lg:px-4 w-5/6 bg-white rounded-lg shadow-md h-34">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                      <Avatar username={post.name + ' ' + post.last_name} />
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold">
                          {post.username}
                        </span>
                        <span className="text-xs text-gray-500">
                          {beautifyDate(post.created_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-5 ">
                    <span className="text-sm">{post.text}</span>
                  </div>
                  {post.images.length > 0 && (
                    <div className="flex justify-center self-center mt-3 w-10/12">
                      <img
                        className="object-contain w-104 h-52"
                        alt={`img-${post.id}`}
                        src={post.images[0]?.url}
                      />
                    </div>
                  )}
                  <div className="flex flex-row justify-center w-full mb-3 mt-2  ">
                    <Comment comments={post.comments} />
                  </div>
                  <CreateComment postId={post.id} />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PostComponent;
