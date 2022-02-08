import { SIGN_IN, SIGN_UP, LOGOUT, SIGN_IN_USER } from '../constants';
import { DispatchPayloadType } from './index';

import { AuthInitialStateType } from './interfaces';

const initialUsers = [
  {
    firstName: 'John',
    lastName: 'doe',
    email: 'john.doe@gmail.com',
    password: 'Password12!',
  },
];

const initialState: AuthInitialStateType = {
  users: initialUsers,
  signedInUser: null,

  signInStatus: '',
  signInData: null,

  signUpStatus: '',
  signUpData: null,
};

const authReducer = (state = initialState, { type, payload }: DispatchPayloadType): AuthInitialStateType => {
  switch (type) {
    case SIGN_IN.PENDING: {
      return {
        ...state,
        signInStatus: 'pending',
      } as AuthInitialStateType;
    }
    case SIGN_IN.SUCCESS: {
      return {
        ...state,
        signInStatus: 'success',
        signedInUser: payload,
      } as AuthInitialStateType;
    }
    case SIGN_IN.ERROR: {
      return {
        ...state,
        signInStatus: 'error',
        signInData: payload,
      } as AuthInitialStateType;
    }
    case SIGN_IN.RESET: {
      return {
        ...state,
        signInStatus: '',
        signInData: null,
      } as AuthInitialStateType;
    }

    case SIGN_UP.PENDING: {
      return {
        ...state,
        signUpStatus: 'pending',
      } as AuthInitialStateType;
    }
    case SIGN_UP.SUCCESS: {
      return {
        ...state,
        signUpStatus: 'success',
        signedInUser: payload,
        users: [...state.users, payload],
      } as AuthInitialStateType;
    }
    case SIGN_UP.ERROR: {
      return {
        ...state,
        signUpStatus: 'error',
        signUpData: payload,
      } as AuthInitialStateType;
    }
    case SIGN_UP.RESET: {
      return {
        ...state,
        signUpStatus: '',
        signUpData: null,
      } as AuthInitialStateType;
    }

    case LOGOUT: {
      return {
        ...initialState,
        users: state.users,
      } as AuthInitialStateType;
    }

    case SIGN_IN_USER: {
      return {
        ...state,
        signedInUser: payload,
      } as AuthInitialStateType;
    }

    default:
      return state;
  }
};

export default authReducer;
