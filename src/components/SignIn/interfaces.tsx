import { AuthInitialStateType } from '../../store/reducers/interfaces';
import { SignInInterface } from '../../store/actions/interfaces';

export interface SignInStateProps {
  auth: AuthInitialStateType;
}

export interface SignInComponentProps {
  signInAction: (body: SignInInterface) => void;
  auth: AuthInitialStateType;
}

export interface SignInFormProps {
  signInAction: (body: SignInInterface) => void;
  auth: AuthInitialStateType;
}

export interface SignInButtonProps {
  handleSignIn: () => void;
  auth: AuthInitialStateType;
  staySignIn: boolean;
  setStaySignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignInFieldsProps {
  data: SignInInterface;
  setData: React.Dispatch<React.SetStateAction<SignInInterface>>;
}
