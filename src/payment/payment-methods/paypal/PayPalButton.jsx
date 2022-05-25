import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import AcceptedCardLogos from '../../checkout/assets/accepted-card-logos.png';
import PayPalLogo from "./assets/paypal-logo.png";
import messages from "./PayPalButton.messages";

const PayPalButton = ({ intl, isProcessing, ...props }) => (
  <button type="submit" {...props}>
    {isProcessing ? (
      <span className="button-spinner-icon text-primary mr-2" />
    ) : null}
    {/* <img
      src={AcceptedCardLogos}
      alt={intl.formatMessage(messages["payment.page.method.type.credit"])}
    /> */}
    {intl.formatMessage(messages['payment.page.methond.type.name'])}
  </button>
);

PayPalButton.propTypes = {
  intl: intlShape.isRequired,
  isProcessing: PropTypes.bool,
};

PayPalButton.defaultProps = {
  isProcessing: false,
};

export default injectIntl(PayPalButton);
