import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Image,
  Container,
  Col,
  Row,
  Form
} from "react-bootstrap";
import { postLogin } from "../_actions/auth";
import { connect } from "react-redux";
import view from "../assets/view.svg";
import QRcode from "../component/QRcode";
import CostumerInvoice from "../component/CustomerInvoice";
import PricingDetails from "../component/PricingDetails";
import edit from "../assets/edit.svg";
import quit from "../assets/quit.svg";

const InvoiceEditModal = props => {
  const [showModal, setModal] = useState(false);

  return (
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
        <Container fluid className="invoice-modal">
          <Button
            bsPrefix="invoice-modal-quitbutton"
            onClick={() => setModal(false)}
          >
            <Image className="invoice-modal-quiticon" src={quit} />
          </Button>

          <Container>
            <label className="invoice-text">Invoice</label>
          </Container>
          <PricingDetails />
          <br />
          <CostumerInvoice />
        </Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={2}>
            <label>Status :</label>
          </Col>
          <Col lg={4}>
            <Form.Group controlId="formGridState">
              <Form.Control as="select">
                <option value="Pending">Pending</option>
                <option value="Approve">Approve</option>
                <option value="Decline">Decline</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col lg={2}>
            <Container>
              <Button bsPrefix="invoice-modal-save-button">SAVE</Button>
            </Container>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: login => dispatch(postLogin(login))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEditModal);
