import { MENU_HANDLER, AUTH_HANDLER, IS_AUTH } from "../Actions/actionTypes";

const initialState = {
  burgerMenu: false,
  authMenu: false,
  isAuthenticated: false,
  token: null,
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_HANDLER:
      return { ...state, burgerMenu: !state.burgerMenu };
    case AUTH_HANDLER:
      return { ...state, authMenu: !state.authMenu, isAuth: false };
    case IS_AUTH:
      return { ...state, isAuthenticated: !state.isAuthenticated };
    default:
      return state;
  }
}
