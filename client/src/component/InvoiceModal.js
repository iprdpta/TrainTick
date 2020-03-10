import React, { useState } from "react";
import {
  Button,
  Modal,
  Image,
  Container,
  Col,
  Row,
  Card
} from "react-bootstrap";
import { postLogin } from "../_actions/auth";
import { connect } from "react-redux";
import view from "../assets/view.svg";
import quit from "../assets/quit.svg";
import no from "../assets/nocamera.svg";
import traintick from "../assets/traintick.png";

const InvoiceModal = ({ data }) => {
  const [showModal, setModal] = useState(false);

  return data && data.ticket ? (
    <>
      <Button bsPrefix="admin-button">
        <Image
          onClick={() => setModal(true)}
          className="admin-button-icon"
          src={view}
        />
      </Button>
      <Modal
        className="fontx"
        size="lg"
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
            <Container fluid className="buy-header-title">
              <label className="buy-header-title">Invoice Detail</label>
            </Container>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={8}>
                <Container>
                  <label className="invoice-pricing">Pricing Details</label>
                </Container>
                <Container fluid className="invoice-pricing-details">
                  <Row className="invoice-pricing-row">
                    <Col lg={5}>
                      <strong>Ticket</strong>
                    </Col>
                    <Col lg={2}>
                      <strong>Qty</strong>
                    </Col>
                    <Col lg={5}>
                      <strong>Price</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={5}>
                      <label>
                        {data.ticket.train_name}
                        <br />
                        {data.ticket.traintype.name}
                      </label>
                    </Col>
                    <Col lg={2}>
                      <label>{data.qty}</label>
                    </Col>
                    <Col lg={5}>
                      <label>Rp{data.ticket.price},-</label>
                    </Col>
                  </Row>
                  <Row noGutters className="invoice-pricing-total">
                    <Col lg={8}>
                      <label className="invoice-pricing-total-text">
                        Total
                      </label>
                    </Col>
                    <Col lg={4}>
                      <label className="invoice-pricing-total-text">
                        Rp{data.total_price},-
                      </label>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg={4}>
                <Container>
                  <Container>
                    <Card className="bg-dark text-white">
                      {data.attachment ? (
                        <Card.Img
                          alt="Attachment"
                          style={{ height: "180px" }}
                          src={require(`../images/${data.attachment}`)}
                        />
                      ) : (
                        <Card.Img
                          alt="Attachment"
                          className="admin-attachmentx"
                          style={{ height: "180px" }}
                          src={no}
                        />
                      )}
                    </Card>
                  </Container>
                </Container>
              </Col>
            </Row>
            <Container className="invoice-costumer">
              <Container fluid className="invoice-logo-container">
                <Image className="invoice-logo" src={traintick} />
              </Container>
              <Row className="invoice-costumer-detail">
                <Col lg={2}>
                  <strong>ID Card</strong>
                </Col>
                <Col lg={3}>
                  <strong>Customer</strong>
                </Col>
                <Col lg={3}>
                  <strong>Phone Number</strong>
                </Col>
                <Col lg={3}>
                  <strong>Email</strong>
                </Col>
              </Row>
              <Row className="invoice-costumer-detailx">
                <Col lg={2}>
                  <label>{data.user.id_card}</label>
                </Col>
                <Col lg={3}>
                  <label>{data.user.name}</label>
                </Col>
                <Col lg={3}>
                  <label>{data.user.phone}</label>
                </Col>
                <Col lg={3}>
                  <label>{data.user.email}</label>
                </Col>
              </Row>
            </Container>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  ) : null;
};

export default InvoiceModal;
