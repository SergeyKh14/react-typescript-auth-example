import React, { FC } from 'react';
import Button from '../../../core-ui/Button';

import { SignUpButtonProps } from '../interfaces';

const SignUpButton: FC<SignUpButtonProps> = ({ handleSignUp, isFormValid, auth: { signUpStatus } }) => {
  return (
    <div className="auth-form-bottom-box">
      <Button disabled={!isFormValid()} loading={signUpStatus === 'pending'} onClick={handleSignUp}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpButton;
