import Header from '../components/Header';
import { WhatsappButton } from '../components/WhatsappButton';
import { Helmet } from 'react-helmet';

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>

      <div className='App'>
        <Header />
        {children}
        <WhatsappButton />
      </div>
    </>
  );
};
