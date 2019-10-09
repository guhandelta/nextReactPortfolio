// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
    let errors = {};
  
    // debugger;
    Object.entries(values).forEach(([key, value]) => {
        // debugger;

        if (!values[key] && (values[key] === 'startDate' || values[key] === 'endDate')) {
            errors[key] = `Field ${key} is reqiuired`
          }
    }); 

    const startDate = values.startDate;
    const endDate = values.endDate;

    if(startDate && endDate && endDate.isBefore(startDate)){
      errors.endDate = 'End Date can\'t be before Start Date!!!';
    }

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

const PortfolioCreateForm = (props) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
      // The porfolio form just need to take care of receiving all the data and does not need to know anything about API calls to the-
      //- server to save the portfolio info, so the validation and the API requests are handles spearately => to simplify the code
    >
      {({ isSubmitting }) => (
        <Form>

            <Field type="text" name="title" label="Title" component={PortInput} /> 
            <Field type="text" name="company" label="Company" component={PortInput} /> 
            <Field type="text" name="location" label="Location" component={PortInput} /> 
            <Field type="text" name="position" label="Position" component={PortInput} /> 
            <Field type="textarea" name="descripition" label="Description" component={PortInput} /> 
            <Field name="startDate" label="Start Date" component={PortDate} />
            <Field name="endDate" canBeDisabled={true} label="End Date" component={PortDate} /> <br/> <br/>
            { props.error && <Alert color="danger"> {props.error} </Alert> }
            <Button size="lg" color="success" type="submit" disabled={isSubmitting}>
                Create
            </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm; 