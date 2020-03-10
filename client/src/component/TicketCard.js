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
import ModalLogin from "../component/ModalLogin";
import ModalRegister from "../component/ModalRegister";
import { postLogin, registerUser } from "../_actions/auth";
import { Label } from "react-bootstrap";
import { connect } from "react-redux";
import arrow from "../assets/arrow.svg";
import TicketList from "../component/TicketList";
import { getTicket } from "../_actions/ticket";
import next from "../assets/next.svg";
import ModalBuy from "../component/ModalBuy";
import moment from "moment";

const TicketCard = ({ getTicket, ticket }) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  console.log(ticket, "Asd sadsa xxxxxxxx");

  useEffect(() => {
    getTicket(from, to);
  }, []);

  const handleChange = () => {
    setTo(from);
    setFrom(to);
  };
  const getDuration = (timeA, timeB) => {
    let startTime = moment(timeA, "HH:mm:ss");
    let endTime = moment(timeB, "HH:mm:ss");
    let duration = moment.duration(endTime.diff(startTime));
    let hours = parseInt(duration.asHours());
    let minutes = parseInt(duration.asMinutes()) - hours * 60;
    return `${hours} H ${minutes} M`;
  };

  const handleSearch = (e, from, to) => {
    e.preventDefault();
    console.log(from, to, "Asdsa dasd asdasdsadsadsa kon");
    getTicket(from, to);
  };
  
  return ticket ? (
    <>
      <Container className="ticketCard shadow">
        <Row>
          <Col lg={3} className="ticket-tabs">
            <Container className="ticket-tab ticket-text">
              <label>Train Ticket</label>
            </Container>
          </Col>
          <Col lg={9}>
            <label className="ticketCard-textx">Train Ticket</label>
            <Row>
              <Col lg={5.5} className="ticketCard-text2">
                <Form.Group>
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    value={from}
                    onChange={e => setFrom(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col xs={7}>
                    <Form.Group>
                      <Form.Label>Date of Departure</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col xs={5}>
                    <Form.Check inline label="Round-Trip" />
                  </Col>
                </Row>
              </Col>
              <Col lg={1}>
                <Row noGutters>
                  <Button
                    bsPrefix="buttonReverse"
                    onClick={() => handleChange()}
                  >
                    <Image src={arrow} className="buttonReverse-icon" />
                  </Button>
                </Row>
              </Col>
              <Col lg={5.5} className="ticket-text2">
                <Form.Group>
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    value={to}
                    onChange={e => setTo(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col xs={5}>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Adult</Form.Label>
                      <Form.Control as="select">
                        <option>0</option>
                        <option>1</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={5}>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Baby</Form.Label>
                      <Form.Control as="select">
                        <option>0</option>
                        <option>1</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={1}>
                    <Button
                      bsPrefix="buttonSearch"
                      onClick={e => handleSearch(e, from, to)}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="ticketList">
        <Row className="ticket-text">
          <Col lg={2}>
            <label>Train Name</label>
          </Col>
          <Col lg={2}>
            <label>Depart</label>
          </Col>
          <Col lg={1}>
            <label> </label>
          </Col>
          <Col lg={2}>
            <label>Arrival</label>
          </Col>
          <Col lg={2}>
            <label>Duration</label>
          </Col>
          <Col lg={3}>
            <label>Price for One Person</label>
          </Col>
        </Row>
        {ticket.ticket.map((item, index) => (
          <Row key={index} className="ticketListx">
            <Col lg={2}>
              <label className="ticket-text">{item.train_name}</label>
              <br />
              <label className="ticket-text2">
                {item.traintype && item.traintype.name}
              </label>
            </Col>
            <Col lg={2}>
              <label className="ticket-text">{item.start_time}</label>
              <br />
              <label className="ticket-text2">{item.depart}</label>
            </Col>
            <Col lg={1}>
              <br />
              <Image src={next} className="arrow" />
            </Col>
            <Col lg={2}>
              <label className="ticket-text">{item.arrival_time}</label>
              <br />
              <label className="ticket-text2">{item.destination}</label>
            </Col>
            <Col lg={2}>
              <label className="ticket-text">
                {getDuration(item.start_time, item.arrival_time)}
              </label>
            </Col>
            <Col lg={2}>
              <label className="ticket-text">Rp{item.price}</label>
            </Col>
            <Col lg={1}>
              <Container fluid bsPrefix="button-market-container">
                <ModalBuy data={item} />
              </Container>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  ) : (
    <label>Load</label>
  );
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return { getTicket: (from, to) => dispatch(getTicket(from, to)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(TicketCard);
