import { API, setHeaderAuth } from "../config/api";
import { TICKET_LIST, MYTICKET_LIST, DETAIL_TICKET } from "../config/constants";

export const getTicket = () => {
  return {
    type: TICKET_LIST,
    payload: async () => {
      const res = await API.get("/ticket");
      const { data } = res.data;
      return data;
    }
  };
};

export const getTicketDetail = id => {
  return {
    type: DETAIL_TICKET,
    payload: async () => {
      const res = await API.get(`/ticket${id}`);
      const { data } = res.data;
      return data;
    }
  };
};

export const getMyTicket = login => {
  return {
    type: MYTICKET_LIST,
    payload: async () => {
      const token = localStorage.getItem("token");
      setHeaderAuth(token);
      const res = await API.get("/order");
      const { data } = res.data;
      return data;
    }
  };
};
