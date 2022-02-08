import { AuthInitialStateType } from '../../store/reducers/interfaces';

export interface DashboardStateProps {
  auth: AuthInitialStateType;
}

export interface DashboardProps {
  auth: AuthInitialStateType;
  logoutAction: () => void;
}

export interface UserTabelProps {
  signedInUser: AuthInitialStateType['signedInUser'];
}
