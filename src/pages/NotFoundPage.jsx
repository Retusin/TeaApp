import React from 'react';

import notFoundImg from '../assets/images/404.jpg';
import Helmet from './../components/Helmet';
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <Helmet title="404">
      <div>
        <div>
          <img
            className="relative h-screen w-full bg-cover object-cover"
            src={notFoundImg}
            alt="/"
          />
          <div className="absolute bottom-0 right-0 left-0 top-0 bg-black/70 " />
          <h2 className="absolute bottom-0 top-0 left-0 right-0 flex h-screen items-center justify-center text-center text-5xl font-semibold text-white">
            Page Not Found 🥲
          </h2>
          <Link to="/">
            <button className="absolute left-0 top-[60%] right-0 bottom-0 mx-auto mt-20 flex h-5 w-5 items-center justify-center rounded-xl border py-6 px-10  text-center font-semibold text-white">
              Home
            </button>
          </Link>
        </div>
      </div>
    </Helmet>
  );
}

export default NotFoundPage;
