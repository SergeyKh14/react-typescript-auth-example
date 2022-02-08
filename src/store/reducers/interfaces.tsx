type userType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type Status = 'pending' | 'success' | 'error' | '';

type AuthDataType = {
  message: string;
} | null;

export interface AuthInitialStateType {
  users: userType[];
  signedInUser: userType | null;

  signInStatus: Status;
  signInData: AuthDataType;

  signUpStatus: Status;
  signUpData: AuthDataType;
}
