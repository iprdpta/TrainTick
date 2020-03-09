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
import { getTicket } from "../_actions/ticket";
import { connect } from "react-redux";
import market from "../assets/market.svg";
import qrcodes from "../assets/frame.png";
import arrow from "../assets/oo.jpg";
import quit from "../assets/quit.svg";

const ModalBuy = ({ data, getTicket }) => {
  const [showModal, setModal] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    getTicket();
  }, []);

  const dayName = item => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const day = new Date(item);
    return days[day.getDay()];
  };

  return (
    <>
      <Button bsPrefix="button-market" onClick={() => setModal(true)}>
        <Image className="market-icon" src={market} />
      </Button>
      <Modal className="fontx" show={showModal} onHide={() => setModal(false)}>
        <Modal.Header bsPrefix>
          <Container>
            <Button
              bsPrefix="invoice-modal-quitbutton"
              onClick={() => setModal(false)}
            >
              <Image className="invoice-modal-quiticon" src={quit} />
            </Button>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row noGutters className="invoice-qrcode-header">
              <Col lg={8}>
                <Container>
                  <label className="invoice-text-train">Train</label>
                </Container>
                <Container>
                  <strong className="invoice-text-date">
                    {dayName(data.start_date)}
                  </strong>
                  <label className="invoice-text-date">
                    , {data.start_date}
                  </label>
                </Container>
              </Col>
              <Col lg={4}>
                <Image src={qrcodes} className="qrcodes" />
              </Col>
            </Row>
            <Container className="invoice-qrcode-body">
              <Container>
                <label className="invoice-text-train-name">Argo Wilis</label>
                <br />
                <label className="invoice-text-train-type">Eksekutif (H)</label>
              </Container>
              <Row>
                <Col lg={1}>
                  <Image className="ticket-iconx" src={arrow} />
                </Col>
                <Col lg={4}>
                  <label className="invoice-text-bold">{data.start_time}</label>
                  <br />
                  <label className="invoice-text-x">{data.start_date}</label>
                  <br />
                  <label className="invoice-text-bold">
                    {data.arrival_time}
                  </label>
                  <br />
                  <label className="invoice-text-x">{data.arrival_date}</label>
                </Col>
                <Col lg={6}>
                  <label className="invoice-text-bold">{data.depart}</label>
                  <br />
                  <label className="invoice-text-x">
                    {data.depart_station}
                  </label>
                  <br />
                  <label className="invoice-text-bold">
                    {data.destination}
                  </label>
                  <br />
                  <label className="invoice-text-x">
                    {data.destination_station}
                  </label>
                </Col>
              </Row>
            </Container>
          </Container>
          <br />
          <Row>
            <Col lg={7}>
              <Container fluid>
                <Row>
                  <Col xs={3}>
                    <Container fluid className="home-qty">
                      <label>Quantity</label>
                    </Container>
                  </Col>
                  <Col xs={3}>
                    <Button
                      bsPrefix="home-button-plusmin"
                      onClick={() => setQty(qty > 0 ? qty - 1 : 0)}
                    >
                      -
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Container fluid className="home-qty">
                      <label>{qty}</label>
                    </Container>
                  </Col>
                  <Col xs={3}>
                    <Button
                      bsPrefix="home-button-plusmin"
                      onClick={() => setQty(qty + 1)}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={5}>
              <Container>
                <Button bsPrefix="home-add-ticket">ADD TICKET</Button>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalBuy);
