import { ChangeEventHandler, useState, Dispatch } from 'react';
import { formatCurrency } from '../utils/StringUtils';

const REGEX = /^[+-]?\d*(?:[.]\d*)?$/;

interface P {
  type: string;
  value: string;
  valid: boolean;
  reset: Function;
  onChange: ChangeEventHandler;
  setValue: Dispatch<string>;
}

const useOnlyDigitField = (type: string): P => {
  const [valid, setValid] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onChange = (e: any) => {
    e.preventDefault();
    let value = e.target.value.trim();
    if (REGEX.test(value)) {
      setValid(true);
      setValue(value);

      return;
    }
  };

  const reset = () => {
    setValid(false);
    setValue('');
  };

  return {
    type,
    value,
    valid,
    reset,
    onChange,
    setValue,
  };
};

export default useOnlyDigitField;
