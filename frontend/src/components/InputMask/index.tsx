import * as React from 'react';
import InputMask from 'react-input-mask';

export const NumericalInput = (props: any) => (
  <InputMask style={{ textAlign: 'right' }} mask={/\d((\.)\d+)?/g} {...props} />
);
