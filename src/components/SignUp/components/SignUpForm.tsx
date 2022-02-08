import React, { FC, useState } from 'react';
import validator from 'validator';
import SignUpFields from './SignUpFields';
import SignUpButton from './SignUpButton';
import Typography from '../../../core-ui/Typography';

import { SignUpFormProps } from '../interfaces';

const SignUpForm: FC<SignUpFormProps> = ({ signUpAction, auth }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const isFormValid = () => {
    const { email, firstName, lastName, password } = data;

    if (validator.isEmail(email) && firstName && lastName && password.length > 7) {
      return true;
    }

    return false;
  };

  const handleSignUp = () => {
    if (isFormValid()) {
      signUpAction(data);
    }
  };

  const { signUpData, signUpStatus } = auth;

  return (
    <div className="auth-form-content">
      <SignUpFields data={data} setData={setData} />
      {signUpStatus === 'error' && signUpData?.message && (
        <Typography className="auth-error" variant="caption" component="p">
          {signUpData?.message}
        </Typography>
      )}
      <SignUpButton isFormValid={isFormValid} auth={auth} handleSignUp={handleSignUp} />
    </div>
  );
};

export default SignUpForm;
