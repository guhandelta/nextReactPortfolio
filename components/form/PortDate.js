import React from 'react'
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import { FormGroup, Label } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

export default class PortDate extends React.Component {
    constructor(props){
       super(props);
       this.state={
           dateValue: Moment() // Moment()=> current date
       };

       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date){
        const { setFieldValue, setFieldTouched  } = this.props.form;
        const { name  } = this.props.field;   
        
        const formattedDate = date.format();
        this.setState({
            dateValue: date
        });

        setFieldValue(name, date, true);
        setFieldTouched(name, true, true);
    }

    render() {
        const { label, field, form: { touched, errors }} = this.props;
        return (
                // The Moment Object will be assigned to the DatePicker, whenever some date is clicked => DatePicker will provide that object
            <FormGroup>
                <Label>{label}</Label>
                <div className="input-control">
                    <DatePicker 
                        selected={this.state.dateValue}
                        onChange={this.handleChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        maxDate={Moment()}
                        dropdownMode="select"
                    />
               </div>
                {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
            </FormGroup>
        );
    }
}
