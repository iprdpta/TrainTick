import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Form,
  Button,
  Row,
  Col,
  Modal
} from "react-bootstrap";
import ModalLogin from "../component/ModalLogin";
import ModalRegister from "../component/ModalRegister";
import { getTicket } from "../_actions/ticket";
import { Label } from "react-bootstrap";
import { connect } from "react-redux";
import next from "../assets/next.svg";

const TicketList = props => {
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    props.getTicket();
  }, []);

  const { ticket, error, loading } = props.ticket;
  
  return (
    <>
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
        {ticket.map((item, index) => (
          <Row key={index} onClick={() => setModal(true)} className="ticketListx">
            <Col lg={2}>
              <label className="ticket-text">{item.train_name}</label>
              <br />
              <label className="ticket-text2">{item.traintype && item.traintype.name}</label>
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
              <label className="ticket-text">5j 05m</label>
            </Col>
            <Col lg={3}>
              <label className="ticket-text">Adult : Rp{item.price}</label><br/>
              <label className="ticket-text">Baby : Rp{item.price_baby}</label>
            </Col>
          </Row>
        ))}
      </Container>

      <Modal
        className="fontx"
        size="sm"
        show={showModal}
        onHide={() => setModal(false)}
      >
        <Container bsPrefix="modalBody">
          <label>Add to My Tickets ?</label>
        </Container>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTicket: () => dispatch(getTicket())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
