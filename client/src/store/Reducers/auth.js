import { AUTH_SUCCESS, AUTH_LOGOUT, AVATAR } from "../Actions/actionTypes";

const initialState = {
  token: localStorage.getItem('token'),
  email: null,
  avatar: null,
  isAdmin: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, token: action.token, email: action.email, isAdmin: action.isAdmin };
    case AUTH_LOGOUT:
      return { ...state, token: null, email: null, avatar: null, isAdmin: false };
      case AVATAR: 
      return {...state, avatar: action.image}
    default:
      return state;
  }
}
