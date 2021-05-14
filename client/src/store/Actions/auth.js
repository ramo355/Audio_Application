import axios from "axios";
import { AUTH_SUCCESS, AUTH_LOGOUT, AVATAR } from "./actionTypes";

export function auth(email, password, isLogin) {
  return async (dispatch) => {
    const authData = {
      email,
      password,
    };

    let url = "http://localhost:5000/register";

    if (isLogin) {
      url = "http://localhost:5000/auth";
    }
    const response = await axios.post(url, authData);
    const data = response.data;
    console.log(data);

    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("email", data.email);
    localStorage.setItem("isAdmin", data.isAdmin);

    dispatch(authSuccess(data.token, data.email, data.isAdmin));
    dispatch(autoLogout(data.expiresIn));
  };
}

export function autoLogout(time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("email");
  return {
    type: AUTH_LOGOUT,
  };
}

export function authSuccess(token, email, isAdmin) {
  return {
    type: AUTH_SUCCESS,
    token,
    email,
    isAdmin,
  };
}

export function autoLogin() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const isAdmin = localStorage.getItem("isAdmin");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token, email, isAdmin));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}

export function avatarHandler(image) {
  return {
    type: AVATAR,
    image,
  };
}

export function fetchImage(userId, isGet, img) {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("avatar", img);
    let data = formData;
    let url = `http://localhost:5000/profile/${userId}`;
    if (isGet) {
      const responce = await axios.get(url);
      dispatch(avatarHandler(responce.data));
    } else {
      const responce = await axios.post(url, data);
      dispatch(avatarHandler(responce.data));
    }
  };
}
