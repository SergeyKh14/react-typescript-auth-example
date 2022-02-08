import { DispatchPayloadType } from '../reducers';
import { SignInInterface, SignUpInterface } from './interfaces';
import { SIGN_IN, SIGN_UP, LOGOUT } from '../constants';
import store from '../index';

export const signIn =
  ({ email, password }: SignInInterface) =>
  async (dispatch: (event: DispatchPayloadType) => void) => {
    dispatch({ type: SIGN_IN.PENDING });
    const {
      auth: { users },
    } = store.getState();

    const selectedUser = users.find((user) => user.email === email);

    if (selectedUser && selectedUser?.password === password) {
      localStorage.setItem('userData', JSON.stringify(selectedUser));

      dispatch({ type: SIGN_IN.SUCCESS, payload: selectedUser });
    } else {
      const data = {
        message: 'User does not exist.',
      };

      dispatch({ type: SIGN_IN.ERROR, payload: data });
    }
  };

export const signUp = (body: SignUpInterface) => async (dispatch: (event: DispatchPayloadType) => void) => {
  dispatch({ type: SIGN_UP.PENDING });
  const { email } = body;
  const {
    auth: { users },
  } = store.getState();

  const selectedUser = users.find((user) => user.email === email);

  if (!selectedUser) {
    localStorage.setItem('userData', JSON.stringify(body));

    dispatch({ type: SIGN_UP.SUCCESS, payload: body });
  } else {
    const data = {
      message: 'Email already exist.',
    };

    dispatch({ type: SIGN_UP.ERROR, payload: data });
  }
};

export const logout = () => async (dispatch: (event: DispatchPayloadType) => void) => {
  localStorage.clear();
  return dispatch({ type: LOGOUT });
};
