import React from 'react';
import AllProducts from '../components/AllProducts/AllProducts';

import Benefits from '../components/Benefits/Benefits';
import Delivery from '../components/Delivery/Delivery';
import Hero from '../components/Hero/Hero';
import Helmet from './../components/Helmet';

function HomePage() {
  return (
    <div>
      <Helmet title="Home">
        <Hero
          heading="Tea Shop"
          message="Hand blended and custom crafted fine organic teas and botanicals"
          button="Order Now"
        />
        <Benefits />
        <AllProducts />
        <Delivery />
      </Helmet>
    </div>
  );
}

export default HomePage;
