import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { getTicket } from "../_actions/ticket";
import { connect } from "react-redux";
import next from "../assets/next.svg";
import ModalBuy from "../component/ModalBuy";
import moment from "moment";

const TicketList = props => {
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    props.getTicket();
  }, []);

  const { ticket, error, loading } = props.ticket;

  const getDuration = (timeA, timeB) => {
    let startTime = moment(timeA, "HH:mm:ss");
    let endTime = moment(timeB, "HH:mm:ss");
    let duration = moment.duration(endTime.diff(startTime));
    let hours = parseInt(duration.asHours());
    let minutes = parseInt(duration.asMinutes()) - hours * 60;
    return `${hours} H ${minutes} M`;
  };
  if (loading) return <h1>Loading...</h1>;

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
