import React, { useState } from "react";
import { Container, Image, Button, Row, Col, Modal } from "react-bootstrap";
import { orderTicket } from "../_actions/order";
import { connect } from "react-redux";
import market from "../assets/market.svg";
import qrcodes from "../assets/frame.png";
import arrow from "../assets/oo.jpg";
import quit from "../assets/quit.svg";
import { Link } from "react-router-dom";

const ModalBuy = ({ data, orderTicket }) => {
  const { id, price } = data;
  const [showModal, setModal] = useState(false);
  const [showModalx, setModalx] = useState(false);
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(qty * price);

  const handleOrder = (id, qty) => {
    const ticket_id = id;
    const order = { qty, ticket_id };
    orderTicket(order);
    setModal(false);
    setModalx(true);
  };

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

  const handleInc = () => {
    setQty(qty + 1);
    // if (setQty) {
    //   setTotal(price * qty);
    // }
  };

  const handleDec = () => {
    setQty(qty > 0 ? qty - 1 : 0);
    // setTotal(price * qty);
  };

  return data && data.traintype ? (
    <>
      <Button bsPrefix="button-market" onClick={() => setModal(true)}>
        <Image className="market-icon" src={market} />
      </Button>
      <Modal
        size="lg"
        className="fontx"
        show={showModal}
        onHide={() => setModal(false)}
      >
        <Modal.Header bsPrefix>
          <Container>
            <Button
              bsPrefix="invoice-modal-quitbutton"
              onClick={() => setModal(false)}
            >
              <Image className="invoice-modal-quiticon" src={quit} />
            </Button>
          </Container>
          <Container fluid className="buy-header-title">
            <label className="buy-header-title">BOOK TICKET</label>
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
                <label className="invoice-text-train-name">
                  {data.train_name}
                </label>
                <br />
                <label className="invoice-text-train-type">
                  {data.traintype.name}
                </label>
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

                <Container fluid className="home-price">
                  <label>Price : Rp{data.price},-</label>
                </Container>
              </Row>
            </Container>
          </Container>
          <br />
          <Row>
            <Col lg={7}>
              <Container fluid>
                <Row>
                  <Container fluid className="home-qtyx">
                    <label>Quantity</label>
                  </Container>
                  <Col xs={2}>
                    <Button
                      bsPrefix="home-button-plusmin"
                      onClick={() => handleDec()}
                    >
                      -
                    </Button>
                  </Col>
                  <Col xs={2}>
                    <Container fluid className="home-qty">
                      <label>{qty}</label>
                    </Container>
                  </Col>
                  <Col xs={2}>
                    <Button
                      bsPrefix="home-button-plusmin"
                      onClick={() => handleInc()}
                    >
                      +
                    </Button>
                  </Col>
                  <Col xs={6}>
                    {/* <Container fluid className="home-qtyx">
                      <label>Total Price : {total}</label>
                    </Container> */}
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={5}>
              <Container>
                <br />
                <br />
                <Button
                  bsPrefix="home-add-ticket"
                  onClick={() => handleOrder(id, qty)}
                >
                  BOOK NOW!
                </Button>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Link to="/mytickets">
        <Modal
          className="fontx"
          show={showModalx}
          onHide={() => setModalx(false)}
        >
          Ampas
        </Modal>
      </Link>
    </>
  ) : null;
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    orderTicket: order => dispatch(orderTicket(order))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalBuy);
