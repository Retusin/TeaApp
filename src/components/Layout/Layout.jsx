import React from 'react';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

function Layout({children}) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
