import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useField } from '@rocketseat/unform';
import CurrencyInputWrapper from 'react-currency-input';
import PropTypes from 'prop-types';
import { getFormatMoney } from '~/util/formats';

import { CurrencyInputContainer } from './styles';

export default function CurrencyInput({ name, label, onChange, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [amount, setAmount] = useState(defaultValue);

  const currency = useMemo(() => getFormatMoney(), []);

  useEffect(() => {
    setAmount(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <span style={{ color: '#666' }} htmlFor={name}>
        {label}
      </span>
      <CurrencyInputWrapper
        id={name}
        prefix={`${currency} `}
        decimalSeparator=","
        thousandSeparator="."
        ref={ref}
        value={amount}
        onChange={onChange}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

CurrencyInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

CurrencyInput.defaultProps = {
  label: null,
  onChange: null,
};
