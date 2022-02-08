import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '../../core-ui/Typography';
import SignInForm from './components/SignInForm';
import { signIn } from '../../store/actions/AuthAction';

import { SignInStateProps } from './interfaces';
import { SignInInterface } from '../../store/actions/interfaces';
import { SignInComponentProps } from './interfaces';

import './styles.scss';

const SignInComponent: FC<SignInComponentProps> = ({ signInAction, auth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.signInStatus === 'success') {
      navigate('/dashboard');
    }
  }, [auth.signInStatus]);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <Typography variant="h5" component="h3">
          Sign In
        </Typography>
        <SignInForm auth={auth} signInAction={signInAction} />
        <Link className="auth-link" to="/sign-up">
          <Typography variant="subtitle2" component="p">
            Create an account
          </Typography>
        </Link>
      </div>
    </div>
  );
};

const mapStateFromProps = ({ auth }: SignInStateProps) => ({
  auth,
});

const mapDispatchToProps = (dispatch: (event: any) => void) => ({
  signInAction: (body: SignInInterface) => dispatch(signIn(body)),
});

export default connect(mapStateFromProps, mapDispatchToProps)(SignInComponent);
