import React, { useState } from 'react';
import '../assets/styles/components/Form.scss';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const [submitForm, setSubmitForm] = useState(false);
  const navigate = useNavigate();

  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        resetForm();
        setSubmitForm(true);

        // TODO: Send data to server and send data to whatsapp
        setTimeout(() => {
          setSubmitForm(false);
          navigate('/');
        }, 1000);

        console.log('submit', values);
      }}
      validate={(values) => {
        let errors = {};
        if (!values.nombre) {
          errors.nombre = 'Ingresa tu nombre';
          // regex for letters and spaces
        } else if (!/^[a-zA-Z ]*$/.test(values.nombre)) {
          errors.nombre = 'Solo letras y espacios';
        }

        if (!values.email) {
          errors.email = 'El email está requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'El email no es válido';
        }

        if (!values.ciudad) {
          errors.ciudad = 'Ingresa tu ciudad';
        } else if (!/^[a-zA-Z ]*$/.test(values.ciudad)) {
          errors.ciudad = 'Solo se aceptan letras y espacios';
        }

        return errors;
      }}
      initialValues={{
        nombre: '',
        email: '',
        ciudad: '',
      }}>
      {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
        <form className='formulario' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='nombre'>Nombre Completo: </label>
            <input
              type='text'
              id='nombre'
              placeholder='John Doe'
              name='nombre'
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.nombre && touched.nombre && <div className='error'>{errors.nombre}</div>}
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              id='email'
              placeholer='correo@correo.com'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <div className='error'>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor='ciudad'>Ciudad: </label>
            <input
              type='text'
              id='ciudad'
              placeholer='Latacunga'
              name='ciudad'
              value={values.ciudad}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.ciudad && touched.ciudad && <div className='error'>{errors.ciudad}</div>}
          </div>

          <button type='submit'>Enviar</button>

          {submitForm && <p className='exito'>Formulario enviado con éxito</p>}
        </form>
      )}
    </Formik>
  );
};
