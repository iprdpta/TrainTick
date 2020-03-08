import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Form,
  Button,
  Row,
  Col,
  Tab,
  Nav,
  Card
} from "react-bootstrap";

import { getMyTicket } from "../_actions/ticket";
import { connect } from "react-redux";
import arrow from "../assets/oo.jpg";
import traintick from "../assets/traintick.png";
import { Link } from "react-router-dom";
import "../styles/MyTickets.css";

const MyTicketsList = props => {
  useEffect(() => {
    props.getMyTicket();
  }, []);
  const { ticket, error: errorTicket, loading: loadingTicket } = props.ticket;

  if (loadingTicket) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Container fluid className="ticketList">
          <Container className="my-tickets-text">
            <label>My Tickets</label>
          </Container>
          {ticket.map((item, index) => (
            <Row key={index}>
              <Col lg={2}></Col>
              <Col lg={8}>
                <Container fluid className="ticketLists shadow">
                  <Row noGutters>
                    <Col lg={8}>
                      <Container fluid className="ticket-list-logo-container">
                        <Image className="ticket-list-logo" src={traintick} />
                      </Container>
                      <Row noGutters className="ticket-list-textleft">
                        <Col lg={4} className="trainName">
                          <label className="ticket-list-trainName">
                            {item.ticket && item.ticket.train_name}
                          </label>
                          <br />
                          <label className="ticket-list-trainType">
                            {item.ticket && item.ticket.traintype.name}
                          </label>
                          <Container bsPrefix="ticket-list-pending">
                            <label>{item.status}</label>
                          </Container>
                        </Col>

                        <Col lg={1}>
                          <Image className="ticket-icon" src={arrow} />
                        </Col>
                        <Col lg={7}>
                          <Row noGutters className="ticket-list-textleft">
                            <Col lg={6}>
                              <label className="ticket-list-textbolt">
                                {item.ticket && item.ticket.start_time}
                              </label>
                              <p>{item.ticket && item.ticket.start_date}</p>
                            </Col>
                            <Col lg={6}>
                              <label className="ticket-list-textbolt">
                                {item.ticket && item.ticket.depart}
                              </label>
                              <p>{item.ticket && item.ticket.depart_station}</p>
                            </Col>
                          </Row>
                          <Row noGutters className="ticket-list-textleft">
                            <Col lg={6}>
                              <label className="ticket-list-textbolt">
                                {item.ticket && item.ticket.arrival_time}
                              </label>
                              <p>{item.ticket && item.ticket.arrival_date}</p>
                            </Col>
                            <Col lg={6}>
                              <label className="ticket-list-textbolt">
                                {item.ticket && item.ticket.destination}
                              </label>
                              <p>
                                {item.ticket && item.ticket.destination_station}
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4}>
                      <Container bsPrefix="ticket-list-trainx">
                        <label className="ticket-list-train">Train</label>
                        <br />
                        <label className="ticket-list-day">Saturday</label>
                        <label className="ticket-list-date">
                          , {item.ticket && item.ticket.start_date}
                        </label>
                      </Container>
                    </Col>
                  </Row>

                  <Row noGutters className="ticket-customer-data">
                    <Col lg={2}>
                      <label>ID Number</label>
                    </Col>
                    <Col lg={3}>
                      <label>Customer</label>
                    </Col>
                    <Col lg={2}>
                      <label>Phone Number</label>
                    </Col>
                    <Col lg={3}>
                      <label>Email</label>
                    </Col>
                  </Row>
                  <Row noGutters className="ticket-customer-datax">
                    <Col lg={2}>
                      <label>{item.user && item.user.id}</label>
                    </Col>
                    <Col lg={3}>
                      <label>{item.user && item.user.name}</label>
                    </Col>
                    <Col lg={2}>
                      <label>{item.user && item.user.phone}</label>
                    </Col>
                    <Col lg={3}>
                      <label>{item.user && item.user.email}</label>
                    </Col>
                    <Col lg={2}>
                      <Link to={`invoice/${item.id}`}>
                        <Button bsPrefix="ticket-payment-button">
                          Pay Now
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg={2}></Col>
            </Row>
          ))}
        </Container>
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMyTicket: () => dispatch(getMyTicket())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyTicketsList);
