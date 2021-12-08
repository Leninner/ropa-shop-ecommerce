import React from 'react';
import { Formik } from 'formik';
import '../assets/styles/components/Form.scss';

export const Form = () => {
  return (
    <form className='formulario'>
      <div>
        <label htmlFor='nombre'>Nombre Completo: </label>
        <input type='text' id='nombre' placeholder='John Doe' name='nombre' />
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' placeholer='correo@correo.com' name='email' />
      </div>
      <div>
        <label htmlFor='ciudad'>Ciudad: </label>
        <input type='text' id='ciudad' placeholer='Latacunga' name='ciudad' />
      </div>

      <button type='submit'>Enviar</button>
    </form>
  );
};
