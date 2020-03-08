import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../styles/Home.css";
import "../styles/Modal.css";
import HomePage from "../component/HomePage";
import { registerUser, postLogin } from "../_actions/auth";
import { connect } from "react-redux";
import NavBar from "../component/NavBar";
import NoRek from "../component/NoRek";
import QRcode from "../component/QRcode";
import CostumerInvoice from "../component/CustomerInvoice"
import PricingDetails from "../component/PricingDetails"
import ProofTransfer from "../component/ProofTransfer"

class Invoice extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <br />
        <Container fluid className="invoice-body">
          <Container>
            <label className="invoice-text">Invoice</label>
          </Container>
          <Row>
            <Col lg={1}></Col>
            <Col lg={6}>
              <NoRek />
              <CostumerInvoice/><br/>
              <PricingDetails/>
            </Col>
            <Col lg={4}>
              <QRcode />
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
