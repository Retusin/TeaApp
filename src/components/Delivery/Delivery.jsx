import React from 'react';

import deliveryImg from '../../assets/images/Delivery.jpg';

function Delivery() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center gap-16 lg:flex lg:flex-row lg:items-center lg:justify-center">
        <div className="max-w-[400px] text-center lg:text-start ">
          <h4 className="my-4 text-2xl font-bold text-green-900">Quick Delivery</h4>
          <p className="mb-6 text-lg">
            Ullamco sint duis quis incididunt esse eu ut irure eu do veniam. Irure voluptate aliquip
            eu in aliquip aliqua irure elit labore do cillum. Do fugiat sunt do aliqua ea. Proident
            esse sunt ut non adipisicing. Magna ex esse minim minim dolor officia sint tempor esse
            sit aute exercitation. Anim officia enim occaecat sunt voluptate excepteur officia est
            ipsum cupidatat.
          </p>
          <button className=" rounded-xl border border-green-900 py-2 px-3 font-semibold">
            Order Now
          </button>
        </div>
        <img className="h-[500px] w-[400px] rounded-lg" src={deliveryImg} alt="Delivery" />
      </div>
    </div>
  );
}

export default Delivery;
