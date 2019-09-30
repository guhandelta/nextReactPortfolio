// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateInputs = (validate) => {
    let errors = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
}

const INITIAL_VALUES = {
                            title: '',
                            company: '',
                            location: '',
                            position: '',
                            descripition: '',
                            startDate: '',
                            endDate: '',
};

const PortfolioCreateForm = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <div className="">
                <label>Title: </label>
                <Field type="text" name="title" /> 
                <ErrorMessage name="email" component="div" /> 
            </div>
          
        <div className="">
            <label>Company: </label>
            <Field type="text" name="company" /> 
            <ErrorMessage name="company" component="div" /> 
        </div>
          
        <div className="">
            <label>Location: </label>
            <Field type="text" name="location" />  
            <ErrorMessage name="location" component="div" /> 
        </div>
          
         <div className="">
            <label>Position: </label>
            <Field type="text" name="position" /> 
            <ErrorMessage name="position" component="div" /> 
         </div>
          
         <div className="">
            <label>Description: </label>
            <Field type="textarea" name="descripition" component="textarea" /> 
            <ErrorMessage name="descripition" component="div" /> 
         </div>
          
        <div className="">
            <label>Start Date: </label>
            <Field type="date" name="startDate" />
            <ErrorMessage name="startDate" component="div" /> 
        </div>
          
        <div className="">
            <label>End Date: </label>
            <Field type="date" name="endDate" /> 
            <ErrorMessage name="endDate" component="div" />  
        </div>
          
          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm; 