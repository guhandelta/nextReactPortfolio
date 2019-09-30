// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';

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
            <FormGroup className="">
                <Label>Title: </Label>
                <Field className="form-control" type="text" name="title" /> 
                <ErrorMessage name="email" component="div" /> 
            </FormGroup>
          
            <FormGroup className="">
                <Label>Company: </Label>
                <Field className="form-control" type="text" name="company" /> 
                <ErrorMessage name="company" component="div" /> 
            </FormGroup>
            
            <FormGroup className="">
                <Label>Location: </Label>
                <Field className="form-control" type="text" name="location" />  
                <ErrorMessage name="location" component="div" /> 
            </FormGroup>
            
            <FormGroup className="">
                <Label>Position: </Label>
                <Field className="form-control" type="text" name="position" /> 
                <ErrorMessage name="position" component="div" /> 
            </FormGroup>
            
            <FormGroup className="">
                <Label>Description: </Label>
                <Field className="form-control" type="textarea" name="descripition" component="textarea" /> 
                <ErrorMessage name="descripition" component="div" /> 
            </FormGroup>
            
            <FormGroup className="">
                <Label>Start Date: </Label>
                <Field className="form-control" type="date" name="startDate" />
                <ErrorMessage name="startDate" component="div" /> 
            </FormGroup>
            
            <FormGroup className="">
                <Label>End Date: </Label>
                <Field className="form-control" type="date" name="endDate" /> 
                <ErrorMessage name="endDate" component="div" />  
            </FormGroup>
            
            <Button type="submit" disabled={isSubmitting}>
                Create
            </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm; 