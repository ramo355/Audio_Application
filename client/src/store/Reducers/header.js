import { MENU_HANDLER, AUTH_HANDLER } from "../Actions/actionTypes";

const initialState = {
  burgerMenu: false,
  authMenu: false
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_HANDLER:
      return { ...state, burgerMenu: !state.burgerMenu };
    case AUTH_HANDLER:
      return { ...state, authMenu: !state.authMenu }; 
    default:
      return state;
  }
}
