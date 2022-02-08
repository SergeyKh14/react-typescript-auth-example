import React, { FC } from 'react';
import MaterialButton from '@mui/lab/LoadingButton';
import { ButtonInterface } from '../interfaces';
import './styles.scss';

const Button: FC<ButtonInterface> = ({ variant = 'contained', disabled, loading, onClick, children }) => {
  return (
    <MaterialButton disabled={disabled} loading={loading} onClick={onClick} variant={variant}>
      {children}
    </MaterialButton>
  );
};

export default Button;
