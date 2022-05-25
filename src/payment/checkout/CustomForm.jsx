import React from "react";
import { PayPalButton } from '../payment-methods/paypal';
import TextField from '@material-ui/core/TextField';
class CustomForm extends React.Component {
    
    render() { 
        return (
           <>
                <TextField color="secondary" onChange={this.props.handleChange} label="First name" type="text" id="outlined-basic" name="name" placeholder="name"  alt="name" variant="outlined" required />
                <TextField color="secondary" onChange={this.props.handleChange} label="Last name" type="text" id="lastName" name="lastName" placeholder="last name" alt="last name" variant="outlined" required />
                <TextField color="secondary" onChange={this.props.handleChange} label="Adress" type="text" name="adress" id="addr" alt="Adress" placeholder="Adress" variant="outlined" />
                <TextField color="secondary" onChange={this.props.handleChange} label="Adress" type="text" name="tel" id="tel" alt="tel" placeholder="tel" variant="outlined" /> 
           </>   
        );
    }
}
 
export default CustomForm ;