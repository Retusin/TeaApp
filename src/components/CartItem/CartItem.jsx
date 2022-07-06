import React from 'react';

const CartItem = ({title, imagePath, price}) => {
  return (
    <div className=" container my-6">
      <div className="mx-auto my-2 flex  max-w-[800px] items-center justify-between gap-3 rounded-xl border bg-green-900 p-4 text-center">
        <img className="h-[100px] w-[100px] rounded-full" src={imagePath} alt="/" />
        <h4 className="text-[12px]  font-semibold text-white md:text-base">{title}</h4>
        <span className="font-bold text-white">{price}$</span>
      </div>
    </div>
  );
};

export default CartItem;
