import React,{useEffect,useState} from 'react';
import axios from 'axios'
import PropTypes, { symbol } from 'prop-types';
import { connect } from 'react-redux';
import { FormattedNumber } from '@edx/frontend-platform/i18n';
import { currencies } from "./currencies.js";
import { localizedCurrencySelector } from '../data/selectors';

/**
 * Displays a positive or negative price, according to the currency and the conversion rate set
 * in the edx-price-l10n cookie, or USD if no cookie exists.  If the currency is not USD, the
 * price is displayed with an * alert symbol next to it.
 *
 * Since localized prices are an estimate anyway, they are always round numbers (0 decimal points).
 */
function LocalizedPrice(props) {
    //creating IP state
  const [ip, setIP] = useState("");
  const [country, setCountry] = useState();
  const [symbol, setSymbol] = useState();
  const [rate, setRate] = useState(0)
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
    setCountry(res.data.country_code);
  };

  const getSymbol =async () => {
    currencies.map((curren) => {
      if (Object.keys(curren)[0] === country) {
       setSymbol(curren[Object.keys(curren)[0]])
      }

    })
  };


  const getRate =async()=>{
    const res= await axios.get("https://api.currencyfreaks.com/latest?apikey=d6e3172654344d45bb959212b0fb26e4&symbols="+symbol)
    setRate(Object.values(res.data.rates)[0])

  }
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
    getSymbol();
    if (symbol){
      getRate();
    }
  }, [ip,symbol]);

  if (props.amount === undefined) {
    return null;
  }

  const price = rate * props.amount;

  if (props.showAsLocalizedCurrency) {
    return (
      <span>
        <FormattedNumber
          value={price}
          style="currency" // eslint-disable-line react/style-prop-object
          currency={props.currencyCode}
          maximumFractionDigits={0}
          minimumFractionDigits={0}
        /> *
      </span>
    );
  }

  return (
    <FormattedNumber
      value={price}
      style="currency" // eslint-disable-line react/style-prop-object
      currency={props.currencyCode}
    />
  );
}

LocalizedPrice.propTypes = {
  amount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  conversionRate: PropTypes.number,
  currencyCode: PropTypes.string,
  showAsLocalizedCurrency: PropTypes.bool,
};

LocalizedPrice.defaultProps = {
  amount: undefined,
  conversionRate: 1,
  currencyCode: symbol,
  showAsLocalizedCurrency: false,
};

export default connect(localizedCurrencySelector)(LocalizedPrice);
