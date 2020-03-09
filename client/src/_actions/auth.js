import { API, setHeaderAuth } from "../config/api";
import { REGISTER_USER, USER_LOGIN } from "../config/constants";

export const postLogin = login => {
  return {
    type: USER_LOGIN,
    payload: async () => {
      const res = await API.post("/login", login);
      const data = res.data;
      localStorage.setItem("token", data.token);
      const token = localStorage.getItem('token')
      setHeaderAuth(token);
      return data;
    }
  };
};

export const registerUser = register => {
  return {
    type: REGISTER_USER,
    payload: async () => {
      const res = await API.post("/register", register);
      const regist = res.data;
      const token = localStorage.setItem("token", regist.token);
      return regist;
    }
  };
};
