import React from 'react';

import Helmet from '../components/Helmet';
import Hero from './../components/Hero/Hero';

function CartPage() {
  return (
    <Helmet title="Cart">
      <Hero heading="Cart" button="Order Now" />
    </Helmet>
  );
}

export default CartPage;
