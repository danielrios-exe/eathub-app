import { useState } from 'react';
import { Textarea, IconButton } from '@material-tailwind/react';
import Wrapper from '../Wrapper';
import { PhotoIcon } from '@heroicons/react/24/outline';
import API from '../../API/environment';

const CreatePostComponent = () => {
  const [text, setText] = useState('');

  const onCreatePost = async (e: any) => {
    e.preventDefault();
    const body = {
      text: text,
      userId: localStorage.getItem('userId'),
      images: [],
    };

    const request = await API.API_URL.post('/post', body);
    console.log('request', request);

    if (request.data.success) {
      setText('');
      window.location.reload();
    } else {
      console.log('error creating post');
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-3 mt-0 mb-8 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
      <div className="">
        <Textarea
          variant="outlined"
          color="indigo"
          placeholder="¿Qué comiste hoy?"
          rows={3}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="w-full flex justify-between py-0">
          <IconButton variant="text" color="indigo" size="sm">
            <PhotoIcon strokeWidth={2} className="w-5 h-5">
              <input id="dropzone-file" type="file" className="" />
            </PhotoIcon>
          </IconButton>
          <button
            type="submit"
            onClick={(e) => {
              onCreatePost(e);
            }}
            className="flex w-28 justify-center rounded-md bg-indigo-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostComponent;
