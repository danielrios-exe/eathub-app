export interface PostComponentProps {
  posts: PostInterface[];
}

export interface PostInterface {
  id: number;
  text: string;
  likes_count: number;
  created_at: string;
  user_id: number;
  username: string;
  name: string;
  last_name: string;
  images: ImageInterface[];
  comments: CommentInterface[];
}

export interface ImageInterface {
  id: number;
  url: string;
  post_id: number;
}

export interface CommentInterface {
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
