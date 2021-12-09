import React from 'react';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Header />
      {children}
      <WhatsappButton />
    </div>
  );
};

export { Layout };
