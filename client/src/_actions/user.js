import { API, setHeaderAuth } from "../config/api";
import { GET_USER } from "../config/constants";

export const getUser = () => {
  return {
    type: GET_USER,
    payload: async () => {
      const token = localStorage.getItem("token");
      setHeaderAuth(token);
      const res = await API.get("/user");
      const { data } = res.data;
      return data;
    }
  };
};
