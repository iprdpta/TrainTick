import { API, setHeaderAuth } from "../config/api";
import { ORDER_DETAIL, UPLOAD_PROOF, ORDER_TICKET } from "../config/constants";

export const orderTicket = order => {
  return {
    type: ORDER_TICKET,
    payload: async () => {
      const res = await API.post(`/order`, order);
      const { data } = res.data;
      return data;
    }
  };
};

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
