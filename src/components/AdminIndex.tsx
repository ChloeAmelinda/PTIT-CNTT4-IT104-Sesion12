import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

export default function AdminIndex() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
