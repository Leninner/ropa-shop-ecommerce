import React from 'react';
import { Layout } from '../containers/Layout';
import { Link } from 'react-router-dom';
import '../styles/pages/PageNotFound.scss';

const PageNotFound = () => {
  return (
    <Layout title='No encontrado | Ropa Shop' subtitle='error 404'>
      <div className='page-not-found'>
        <h1>404</h1>
        <h2>Página no encontrada</h2>

        <Link to='/'>
          <button>Volver al inicio</button>
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
