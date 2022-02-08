import { AuthInitialStateType } from '../../store/reducers/interfaces';
import { SignUpInterface } from '../../store/actions/interfaces';

export interface SignUpStateProps {
  auth: AuthInitialStateType;
}

export interface SignUpComponentProps {
  auth: AuthInitialStateType;
  signUpAction: (body: SignUpInterface) => void;
}

export interface SignUpFormProps {
  auth: AuthInitialStateType;
  signUpAction: (body: SignUpInterface) => void;
}

export interface SignUpFieldsProps {
  data: SignUpInterface;
  setData: React.Dispatch<React.SetStateAction<SignUpInterface>>;
}

export interface SignUpButtonProps {
  handleSignUp: () => void;
  auth: AuthInitialStateType;
  isFormValid: () => boolean;
}
