import { API, setHeaderAuth } from "../config/api";
import { ORDER_DETAIL, UPLOAD_PROOF } from "../config/constants";

export const getOrderDetail = id => {
  return {
    type: ORDER_DETAIL,
    payload: async () => {
      const res = await API.get(`/order/${id}`);
      const { data } = res.data;
      return data;
    }
  };
};

export const uploadProof = (formData, id) => {
  return {
    type: UPLOAD_PROOF,
    payload: async () => {
      const res = await API.post(`/upload/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { data } = res.data;
      return data;
    }
  };
};
