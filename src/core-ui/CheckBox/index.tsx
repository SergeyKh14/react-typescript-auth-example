import React, { FC } from 'react';
import MaterialCheckbox from '@mui/material/Checkbox';
import { CheckboxInterface } from '../interfaces';
import './styles.scss';

const Checkbox: FC<CheckboxInterface> = ({ checked, onCheck }) => {
  return <MaterialCheckbox onChange={onCheck} checked={checked} />;
};

export default Checkbox;
