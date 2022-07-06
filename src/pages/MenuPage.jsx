import React from 'react';

import Helmet from './../components/Helmet';
import Hero from './../components/Hero/Hero';
import AllProducts from './../components/AllProducts/AllProducts';

function MenuPage() {
  return (
    <Helmet title="All Tea">
      <Hero heading="All Tea" button="Order Now" />
      <AllProducts />
    </Helmet>
  );
}

export default MenuPage;
