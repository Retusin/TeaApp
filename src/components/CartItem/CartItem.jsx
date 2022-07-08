import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import {deleteItemFromCart} from '../../redux/slices/cartSlice/cartSlice';

const CartItem = ({title, imagePath, price, id}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className=" container my-6">
      <div className=" relative mx-auto my-2 flex  max-w-[800px] items-center justify-between gap-3 rounded-xl border bg-green-900 p-4 text-center">
        <img className="h-[100px] w-[100px] rounded-full" src={imagePath} alt="/" />
        <h4 className="text-[12px]  font-semibold text-white md:text-base">{title}</h4>
        <span className="font-bold text-white">{price}$</span>
        <div className="absolute top-4 right-4 cursor-pointer" onClick={handleDelete}>
          <AiOutlineCloseCircle color="#fff" size={15} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
