import { API, setHeaderAuth } from "../config/api";
import {
  ADD_TICKET,
  TICKET_LIST,
  MYTICKET_LIST,
  DETAIL_TICKET
} from "../config/constants";

export const getTicket = (from, to) => {
  return {
    type: TICKET_LIST,
    payload: async () => {
      const s = { from, to };
      const res = await API.get(`/ticketx?from=${from}&to=${to}`, );
      const { data } = res.data;
      console.log(from, to, s, "ASd sadsa dsad sad");
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

export const postTicket = addtick => {
  return {
    type: ADD_TICKET,
    payload: async () => {
      const res = await API.post(`/ticket`, addtick);
      const { data } = res.data;
      console.log(addtick, "asdas dsa dasd sad asd asd");
      return data;
    }
  };
};
