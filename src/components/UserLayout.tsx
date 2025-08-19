import React from 'react';
import Header from './header1';
import Menu from './Menu1';
import Navbar from './navbar';
import Main from './Main1';
import Cart from './cart';

export default function UserLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Menu />
        <Main />
        <Cart />
      </div>
    </div>
  );
}
