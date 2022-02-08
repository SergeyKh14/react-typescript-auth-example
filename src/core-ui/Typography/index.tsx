import React, { FC } from 'react';
import MaterialTypography from '@mui/material/Typography';
import { TypographyInterface } from '../interfaces';
import './styles.scss';

const Typography: FC<TypographyInterface> = ({ variant, align, component, className = '', children }) => {
  return (
    <MaterialTypography align={align} className={className} variant={variant} component={component}>
      {children}
    </MaterialTypography>
  );
};

export default Typography;
