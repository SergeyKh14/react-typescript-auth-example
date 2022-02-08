import React, { FC } from 'react';
import Checkbox from '../../../core-ui/CheckBox';
import Typography from '../../../core-ui/Typography';
import Button from '../../../core-ui/Button';

import { SignInButtonProps } from '../interfaces';

const SignInButton: FC<SignInButtonProps> = ({ handleSignIn, staySignIn, setStaySignIn, auth: { signInStatus } }) => {
  const handleStaySignInCheck = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    setStaySignIn(checked);
  };

  return (
    <div className="auth-form-bottom-box">
      <div className="auth-stay-signed">
        <Checkbox checked={staySignIn} onCheck={handleStaySignInCheck} />
        <Typography variant="caption" component="p">
          Stay signed in?
        </Typography>
      </div>
      <Button loading={signInStatus === 'pending'} onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
};

export default SignInButton;
