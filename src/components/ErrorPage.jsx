import React from 'react';
import image from '../Error.svg';
import {Link} from 'react-router-dom';


const ErrorPage = () => {
  return (
    <div>
      <img className="object-center h-96 mx-auto mt-20" src={image} />
      <Link to="/">
      <h1 className="px-4 py-2 text-sm font-medium text-green-900 bg-purple-200 border border-transparent rounded-md hover:bg-green-200 w-40 h-12 mx-auto text-center">
        Take me home
      </h1>
      </Link>
    </div>
  );
};
 
export default ErrorPage;