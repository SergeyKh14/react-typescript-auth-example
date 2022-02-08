import React, { FC } from 'react';
import MaterialTextField from '@mui/material/TextField';
import { TextFieldInterface } from '../interfaces';
import './styles.scss';

const TextField: FC<TextFieldInterface> = ({
  variant = 'standard',
  onChange,
  type,
  label,
  value,
  className,
  fullWidth,
  name,
}) => {
  return (
    <MaterialTextField
      value={value}
      name={name}
      className={className}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      label={label}
      onChange={onChange}
    />
  );
};

export default TextField;
