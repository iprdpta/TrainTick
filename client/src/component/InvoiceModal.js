import React, { useState, useEffect } from "react";
import { Button, Modal, Image, Container, Col, Row } from "react-bootstrap";
import { postLogin } from "../_actions/auth";
import { connect } from "react-redux";
import view from "../assets/view.svg";
import NoRek from "../component/NoRek";
import QRcode from "../component/QRcode";
import CostumerInvoice from "../component/CustomerInvoice";
import PricingDetails from "../component/PricingDetails";
import quit from "../assets/quit.svg";

const InvoiceModal = props => {
  const [showModal, setModal] = useState(false);

  return (
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
        <Container  fluid className="invoice-modal">
          <Button bsPrefix="invoice-modal-quitbutton" onClick={() => setModal(false)}>
            <Image className="invoice-modal-quiticon" src={quit} />
          </Button>

          <Container>
            <label className="invoice-text">Invoice</label>
          </Container>
        </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceModal);
