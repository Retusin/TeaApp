import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import Helmet from './../components/Helmet';
import Hero from './../components/Hero/Hero';

function TeaDetailPage() {
  const teaItem = useSelector(state => state.tea.currentTea);

  return (
    <Helmet title="Details">
      <Hero heading={teaItem.item.title} button="Order Now" />
      <div className="container py-10">
        <div className="block items-center gap-10 lg:flex">
          <img
            className="h-[500px] w-[500px] rounded-xl object-cover"
            src={teaItem.item.imagePath}
            alt="/"
          />
          <div className="max-w-[400px] rounded-xl bg-green-900 p-4">
            <h2 className="mb-20 rounded-xl  text-xl font-bold text-white">{teaItem.item.title}</h2>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white">{teaItem.item.price} $</span>
              <Link to="/">
                <button className="rounded-xl bg-white py-2 px-3 font-semibold text-black">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default TeaDetailPage;
