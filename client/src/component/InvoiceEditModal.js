import React, { useState } from "react";
import {
  Button,
  Modal,
  Image,
  Container,
  Col,
  Row,
  Form,
  Card
} from "react-bootstrap";
import { putStatus } from "../_actions/order";
import { connect } from "react-redux";
import view from "../assets/view.svg";
import edit from "../assets/edit.svg";
import quit from "../assets/quit.svg";
import no from "../assets/nocamera.svg";
import traintick from "../assets/traintick.png";

const InvoiceEditModal = ({ data, putStatus }) => {
  const { id } = data;
  const [showModal, setModal] = useState(false);
  const [stat, setStatus] = useState("Waiting Payment");

  const handleEdit = async (e, stat, id) => {
    e.preventDefault();
    const status = { stat, id };
    const s = await putStatus(status);
    if (s) {
      window.location.reload(false);
    }
  };

  return data && data.ticket ? (
    <>
      <Button bsPrefix="admin-button">
        <Image
          onClick={() => setModal(true)}
          className="admin-button-icon"
          src={edit}
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
                  <Col lg={3}>
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
                  <Col lg={3}>
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
            <Container className="admin-edit-save">
              <Row>
                <Col lg={4}></Col>
                <Col lg={2}>
                  <label>Status : </label>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="formGridState">
                    <Form.Control
                      onChange={e => setStatus(e.target.value)}
                      as="select"
                    >
                      <option value="Waiting Payment">Waiting Payment</option>
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Declined">Declined</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col lg={2}>
                  <Container>
                    <Button
                      bsPrefix="invoice-modal-save-button"
                      onClick={e => handleEdit(e, stat, id)}
                    >
                      SAVE
                    </Button>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  ) : null;
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    putStatus: status => dispatch(putStatus(status))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEditModal);
