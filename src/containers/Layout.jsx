import React from 'react';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';
import { Footer } from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Header />
      {children}
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export { Layout };
