import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../store/actions/AuthAction';
import Typography from '../../core-ui/Typography';
import SignUpForm from './components/SignUpForm';

import { SignUpInterface } from '../../store/actions/interfaces';
import { SignUpStateProps, SignUpComponentProps } from './interfaces';

const SignUpComponent: FC<SignUpComponentProps> = ({ auth, signUpAction }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.signUpStatus === 'success') {
      navigate('/dashboard');
    }
  }, [auth.signUpStatus]);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <Typography variant="h5" component="h3">
          Sign Up
        </Typography>
        <SignUpForm auth={auth} signUpAction={signUpAction} />
        <Link className="auth-link" to="/">
          <Typography variant="subtitle2" component="p">
            Sign In
          </Typography>
        </Link>
      </div>
    </div>
  );
};

const mapStateFromProps = ({ auth }: SignUpStateProps) => ({
  auth,
});

const mapDispatchToProps = (dispatch: (event: any) => void) => ({
  signUpAction: (body: SignUpInterface) => dispatch(signUp(body)),
});

export default connect(mapStateFromProps, mapDispatchToProps)(SignUpComponent);
