import {
  MENU_HANDLER,
  AUTH_HANDLER,
} from "../Actions/actionTypes";

const initialState = {
  burgerMenu: false,
  authMenu: false,
  token: null
}



export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_HANDLER:
      return {...state,
        burgerMenu: !state.burgerMenu,
      };
    case AUTH_HANDLER:
      return { ...state, authMenu: !state.authMenu, isAuth: false };

    default:
      return state;
  }
}
