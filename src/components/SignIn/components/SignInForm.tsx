import React, { FC, useState } from 'react';
import SignInFields from './SignInFields';
import SignInButton from './SignInButton';
import Typography from '../../../core-ui/Typography';

import { SignInFormProps } from '../interfaces';

const SignInForm: FC<SignInFormProps> = ({ signInAction, auth }) => {
  const [staySignIn, setStaySignIn] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = () => {
    if (data.email && data.password) {
      signInAction(data);
    }
  };

  const { signInData, signInStatus } = auth;

  return (
    <div className="auth-form-content">
      <SignInFields data={data} setData={setData} />
      {signInStatus === 'error' && signInData?.message && (
        <Typography className="auth-error" variant="caption" component="p">
          {signInData?.message}
        </Typography>
      )}
      <SignInButton staySignIn={staySignIn} setStaySignIn={setStaySignIn} auth={auth} handleSignIn={handleSignIn} />
    </div>
  );
};

export default SignInForm;
