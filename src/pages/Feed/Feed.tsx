import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';
import { PostInterface } from '../../components/Post/Post-types';
import API from '../../API/environment';

const FeedComponent = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const token = localStorage.getItem('token');
    // Bearer
    API.API_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const request = await API.API_URL.get('/post');

    if (request.data.success) {
      setPosts(request.data.posts);
    }
  };

  return (
    <Wrapper>
      <CreatePost />
      {posts && posts.length > 0 ? <Post posts={posts} /> : null}
    </Wrapper>
  );
};

export default FeedComponent;
