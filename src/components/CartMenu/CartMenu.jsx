import React from 'react';

import {calcTotalPrice} from './../../utils/utils';
import CartItem from './../CartItem/CartItem';

const CartMenu = ({items, onClick}) => {
  return (
    <div className="container">
      <div>
        {items.length > 0 ? (
          items.map(item => <CartItem {...item} />)
        ) : (
          <div className="py-[100px] text-center text-2xl font-semibold">Cart is Empty 🥲</div>
        )}
        <div>
          {items.length > 0 ? (
            <div className="my-10 text-center">
              <div className="mb-6 flex items-center justify-center gap-4 text-xl font-semibold">
                <span>Total Price:</span>
                <span>{calcTotalPrice(items)} $</span>
              </div>
              <button
                onClick={onClick}
                className="cursor-pointer rounded-xl border-2 border-green-900 py-1 px-6 text-xl font-semibold"
              >
                Order
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
