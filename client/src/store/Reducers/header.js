import {
  MENU_HANDLER,
  AUTH_HANDLER,
  REGISTRATION_HANDLER,
  AUTHENTIFICATION_HANDLER,
} from "../Actions/actionTypes";

const initialState = {
  burgerMenu: false,
  authMenu: false,
  isAuth: true,
  title: "",
  placeholder: "",
  name: "",
  subtitle: "",
  auth: "",
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_HANDLER:
      return {...state,
        burgerMenu: !state.burgerMenu,
      };
    case AUTH_HANDLER:
      return { ...state, authMenu: !state.authMenu };

    case REGISTRATION_HANDLER:
      return {...state,
        isAuth: !state.isAuth,
        title: state.title = "Войти",
        name: state.name = "Вход",
        subtitle: state.subtitle = "У вас еще нет аккаунта?",
        auth: state.auth = "Зарегистрироваться",
      };

    case AUTHENTIFICATION_HANDLER:
      return {...state,
        isAuth: !state.isAuth,
        title: state.title = "Регистрация",
        name: state.name = "Зарегистрироваться",
        subtitle: state.subtitle = "У вас уже есть аккаунт?",
        auth: state.auth = "Войти",
      };

    default:
      return state;
  }
}