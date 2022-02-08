import { ElementType } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { TypographyProps } from '@mui/material/Typography';
import { CheckboxProps } from '@mui/material/Checkbox';
import { TextFieldProps } from '@mui/material/TextField';

export interface ButtonInterface {
  variant?: ButtonProps['variant'];
  onClick?: ButtonProps['onClick'];
  loading?: boolean;
  disabled?: boolean;
}

export interface TypographyInterface {
  variant: TypographyProps['variant'];
  component: ElementType;
  className?: string;
  align?: TypographyProps['align'];
}

export interface CheckboxInterface {
  checked: boolean;
  onCheck: CheckboxProps['onChange'];
}

export interface TextFieldInterface {
  type: TextFieldProps['type'];
  label: string;
  value: string;
  onChange?: TextFieldProps['onChange'];
  name?: string;
  variant?: TextFieldProps['variant'];
  className?: string;
  fullWidth?: boolean;
}
