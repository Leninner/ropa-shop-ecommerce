import React from 'react';
import '../assets/styles/components/Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>
          <strong>Developed</strong> by{' '}
          <a href='https://github.com/leninner' target='_blank' rel='noreferrer'>
            @leninner
          </a>
          . The source code is licensed <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>.
        </p>
      </div>
    </footer>
  );
};
