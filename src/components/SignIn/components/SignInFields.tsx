import React, { FC } from 'react';
import TextField from '../../../core-ui/TextField';

import { SignInFieldsProps } from '../interfaces';

const SignInFields: FC<SignInFieldsProps> = ({ data, setData }) => {
  const handleFormChange = ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <TextField
        onChange={handleFormChange}
        value={data.email}
        className="auth-field"
        fullWidth
        type="email"
        name="email"
        label="Email"
      />
      <TextField
        onChange={handleFormChange}
        value={data.password}
        className="auth-field"
        fullWidth
        name="password"
        type="password"
        label="Password"
      />
    </>
  );
};

export default SignInFields;
