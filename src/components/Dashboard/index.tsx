import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import { logout } from '../../store/actions/AuthAction';
import Typography from '../../core-ui/Typography';
import Button from '../../core-ui/Button';
import UserTabel from './components/UserTabel';
import successAnimation from '../../assets/animations/success.json';

import { DashboardStateProps, DashboardProps } from './interface';

import './styles.scss';

const Dashboard: FC<DashboardProps> = ({ logoutAction, auth: { signedInUser } }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!signedInUser) {
      navigate('/');
    }
  }, [signedInUser]);

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Lottie options={lottieOptions} height={100} width={100} />
        <div className="dashboard-sign-in-text">
          <Typography align="center" variant="subtitle2" component="p">
            You are successfully sign in!
          </Typography>
        </div>
        <UserTabel signedInUser={signedInUser} />
        <div className="logout-box">
          <Button onClick={logoutAction}>Log Out</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateFromProps = ({ auth }: DashboardStateProps) => ({
  auth,
});

const mapDispatchToProps = (dispatch: (event: any) => void) => ({
  logoutAction: () => dispatch(logout()),
});

export default connect(mapStateFromProps, mapDispatchToProps)(Dashboard);
