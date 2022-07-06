import React from 'react';
import Helmet from './../components/Helmet';
import Hero from './../components/Hero/Hero';

import productImg from '../assets/images/tea/black-1.jpg';

function TeaDetailPage() {
  return (
    <Helmet title="Details">
      <Hero title="Product 01" />
      <div>
        <div>
          <div>
            <div>
              <img src={productImg} alt="/" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Helmet>
  );
}

export default TeaDetailPage;
