import React from 'react';
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import {RiCupLine} from 'react-icons/ri';
import {GiEcology} from 'react-icons/gi';

import benefitsImg from '../../assets/images/benefits.jpg';

function Benefits() {
  return (
    <div className="container mt-10 pb-5">
      <div className=" block text-center lg:flex lg:items-center lg:justify-center lg:gap-16 lg:text-start">
        <div className="">
          <img className="mx-auto mb-6 h-[500px] w-[400px] rounded-lg" src={benefitsImg} alt="/" />
        </div>
        <div className="mx-auto max-w-[400px] lg:mx-0">
          <h2 className="mb-2 text-3xl font-bold text-green-900">Online Tea Shop</h2>
          <p className="mb-6 text-lg">
            Deserunt ad veniam magna culpa reprehenderit proident quis. Aute culpa qui quis ex
            voluptate sint anim exercitation deserunt enim dolor aliquip culpa. Aliquip cupidatat
            esse tempor dolor. Laborum nisi in ullamco magna reprehenderit ipsum ex sunt deserunt
            veniam laborum laborum. Proident reprehenderit duis nisi excepteur exercitation
            excepteur est.
          </p>
          <ul className="flex items-center justify-between">
            <li className="flex flex-col items-center">
              <MdOutlineHealthAndSafety size={25} className="text-center text-green-900" />
              <span className="text-xl font-semibold">Healthy</span>
            </li>
            <li className="flex flex-col items-center">
              <RiCupLine size={25} className="text-green-900" />
              <span className="text-xl font-semibold">Testy</span>
            </li>
            <li className="flex flex-col items-center">
              <GiEcology size={25} className="text-green-900" />
              <span className="text-xl font-semibold">Ecology</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
