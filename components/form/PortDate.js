import React from 'react'
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import { Button, FormGroup, Label } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

export default class PortDate extends React.Component {
    constructor(props){
       super(props);
       this.state={
           dateValue: Moment(), // Moment()=> current date
            isHidden: false
       };

       this.handleChange = this.handleChange.bind(this);
    }

    setFieldValueAndTouched(date, touched){
        const { setFieldValue, setFieldTouched  } = this.props.form;
        const { name } = this.props.field;   
        
        setFieldValue(name, date, true);
        setFieldTouched(name, touched, true);
    }

    handleChange(date){
        
        this.setState({ dateValue: date });
        
        this.setFieldValueAndTouched(date, true);
    }

    toggleData(date){

        this.setState({ isHidden: !this.state.isHidden });

        this.setFieldValueAndTouched(date, true);
    }

    render() {
        const { canBeDisabled, label, field, form: { touched, errors }} = this.props;
        const { isHidden, dateValue } = this.state;
        return (
                // The Moment Object will be assigned to the DatePicker, whenever some date is clicked => DatePicker will provide that object
            <FormGroup>
                <Label>{label}</Label>
                { !isHidden &&
                    <div className="input-control">
                        <DatePicker 
                            selected={dateValue}
                            onChange={this.handleChange}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            maxDate={Moment()}
                            dropdownMode="select"
                        />
                    </div>
               }
                { 
                    canBeDisabled && !isHidden && <Button onClick={() => this.toggleData(null)}> Still Working Here..... </Button> //
                    // Send undefined(empty params), to toggleData(), if the End Date is Hidden
                }

                {
                    canBeDisabled && isHidden &&
                    <React.Fragment>
                        <br/>
                        <span> Still Working Here... </span>
                        <Button onClick={() => this.toggleData(dateValue) }> Set End Date </Button>
                    </React.Fragment>
                    // Send the Date specified in DatePicker, to toggleData(), if a date is specified
                }

                {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
            </FormGroup>
        );
    }
}
