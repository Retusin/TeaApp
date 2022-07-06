import React from 'react';
import {useDispatch} from 'react-redux';

import {setItemInCart} from '../../redux/slices/cartSlice/cartSlice';

function ProductCard(props) {
  const {title, price, imagePath, id} = props.item;
  const dispatch = useDispatch();
  const handleClick = e => {
    e.stopPropagation();
    dispatch(setItemInCart({title, imagePath, price, id}));
  };
  return (
    <div>
      <div className="flex h-[390px] w-[270px] flex-col  rounded-xl bg-[#e8e8e8] p-3">
        <div className="flex items-center justify-center">
          <img
            className="h-[200px] w-[200px] rounded-full border-2 border-green-900 text-center"
            src={imagePath}
            alt={title}
          />
        </div>
        <h5 className=" mt-2 text-center text-sm font-semibold">{title}</h5>
        <div className=" mt-auto flex items-center justify-between">
          <span className="text-xl">{price}$</span>
          <button
            onClick={handleClick}
            className="rounded-xl bg-green-900 py-2 px-3 font-semibold text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
