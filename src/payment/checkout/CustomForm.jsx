import React from "react";
import { PayPalButton } from "../payment-methods/paypal";
import TextField from "@material-ui/core/TextField";
import messages from './CustomForm.message';
class CustomForm extends React.Component {
  render() {
    return (
      <div className="form-fields">
        <div className="left-fields">
          <div className="field">
            <TextField
              color="secondary"
              onChange={this.props.handleChange}
              label={this.props.intl.formatMessage(messages['payment.form.label.name'])}
              type="text"
              id="outlined-basic"
              name="name"
              alt="name"
              variant="outlined"
              required
            />
          </div>
          <div className="field">
            <TextField
              color="secondary"
              onChange={this.props.handleChange}
              label={this.props.intl.formatMessage(messages['payment.form.label.lastName'])}
              type="text"
              id="lastName"
              name="lastName"
              alt="last name"
              variant="outlined"
              required
            />
          </div>
        </div>
        <div className="right-fields">
          <div className="field">
            <TextField
              color="secondary"
              onChange={this.props.handleChange}
              label={this.props.intl.formatMessage(messages['payment.form.label.addr'])}
              type="text"
              name="adress"
              id="addr"
              alt="Adress"
              variant="outlined"
            />
          </div>
          <div className="field">
            <TextField
              color="secondary"
              onChange={this.props.handleChange}
              label={this.props.intl.formatMessage(messages['payment.form.label.tel'])}
              type="phone"
              name="tel"
              id="tel"
              alt="tel"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomForm;
