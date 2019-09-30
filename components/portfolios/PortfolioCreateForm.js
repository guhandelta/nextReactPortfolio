// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/PortInput';

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
      initialValues={INITIAL_VALUES}
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

            <Field className="form-control" type="text" name="title" label="Title" component={PortInput} /> 
            <Field className="form-control" type="text" name="company" label="Company" component={PortInput} /> 
            <Field className="form-control" type="text" name="location" label="Location" component={PortInput} /> 
            <Field className="form-control" type="text" name="position" label="Position" component={PortInput} /> 
            <Field className="form-control" type="textarea" name="descripition" label="Description" component={PortInput} /> 
            
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