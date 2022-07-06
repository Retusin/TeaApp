import React from 'react';
import {useSelector} from 'react-redux';

import Helmet from '../components/Helmet';
import Hero from './../components/Hero/Hero';
import CartMenu from './../components/CartMenu/CartMenu';
/* import {calcTotalPrice} from './../utils/utils'; */

function CartPage() {
  const value = useSelector(state => state.cart.itemsInCart);
  /* const totalPrice = calcTotalPrice(items); */
  return (
    <Helmet title="Cart">
      <Hero heading="Cart" button="Order Now" />
      <CartMenu items={value} />
    </Helmet>
  );
}

export default CartPage;
