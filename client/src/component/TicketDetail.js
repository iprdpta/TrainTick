import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import qrcodes from "../assets/frame.png";
import { getTicketDetail } from "../_actions/ticket";
import { useParams } from "react-router-dom";
import "../styles/Invoice.css";

const TicketDetail = ({ getTicketDetail, ticket , id}) => {

  useEffect(() => {
    getTicketDetail(id);
  }, []);

  if (ticket.loading) {
    return <label>Loading... </label>;
  }
  return (
    <>
      
    </>
  );
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return { getTicketDetail: id => dispatch(getTicketDetail(id)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);
