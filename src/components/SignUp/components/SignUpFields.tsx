import React, { FC } from 'react';
import TextField from '../../../core-ui/TextField';

import { SignUpFieldsProps } from '../interfaces';

const SignUpFields: FC<SignUpFieldsProps> = ({ data, setData }) => {
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
        value={data.firstName}
        className="auth-field"
        fullWidth
        type="text"
        name="firstName"
        label="First Name"
      />
      <TextField
        onChange={handleFormChange}
        value={data.lastName}
        className="auth-field"
        fullWidth
        type="text"
        name="lastName"
        label="Last Name"
      />
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

export default SignUpFields;
