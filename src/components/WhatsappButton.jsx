import React from 'react';
import '../assets/styles/components/WhatsappButton.scss';

const WhatsappButton = () => (
  <>
    {' '}
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />
    <a href='https://wa.me/message/NSED5TGIOBKUG1' className='float' target='_blank' rel='noreferrer'>
      <i className='fa fa-whatsapp my-float'></i>
    </a>
  </>
);

export default WhatsappButton;
