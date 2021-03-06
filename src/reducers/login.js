import { LOGIN_REQUEST, LOGIN_FAILED, LOGIN_INPUT_CHANGE } from 'actions/login';

const initialState = {
  isFetching: false,
  mobileNo: 'mshameer@gmail.com',
  password: 'qwweee@123',
  pause: false,
  errors: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, errors: {} };

    case LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
        pause: true,
      };

    case LOGIN_INPUT_CHANGE:
      let { change } = action;
      if (change.hasOwnProperty('mobileNo')) {
        return {
          ...state,
          mobileNo: change.mobileNo,
          errors: { ...state.errors, mobileNo: '', message: '' },
          pause: false,
        };
      }
      if (change.hasOwnProperty('password')) {
        return {
          ...state,
          password: change.password,
          errors: { ...state.errors, password: '', message: '' },
          pause: false,
        };
      }

    default:
      return state;
  }
};
