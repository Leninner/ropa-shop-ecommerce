import React from 'react';
import { Header } from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Header />
      {children}
    </div>
  );
};

export { Layout };
