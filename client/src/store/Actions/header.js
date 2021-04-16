import {
  MENU_HANDLER,
  AUTH_HANDLER,
  REGISTRATION_HANDLER,
} from "./actionTypes";


export function toogleMenuHandler() {
  return {
    type: MENU_HANDLER,
  };
}

export function toogleAuthHandler() {
  return {
    type: AUTH_HANDLER,
  };
}

export function registerHandler() {
  return {
    type: REGISTRATION_HANDLER,
  };
}

