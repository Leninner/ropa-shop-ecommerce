import React from 'react';
import '../assets/styles/components/WhatsappButton.scss';
import { connect } from 'react-redux';

const WhatsappButton = () => {
  return (
    <>
      {' '}
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />
      <a href='https://walink.co/96e5fc' className='float' target='_blank' rel='noreferrer'>
        <i className='fa fa-whatsapp my-float'></i>
      </a>
    </>
  );
};

export default connect(null, null)(WhatsappButton);
