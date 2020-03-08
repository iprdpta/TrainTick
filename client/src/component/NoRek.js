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
import alertx from "../assets/alert.svg";
import "../styles/Invoice.css";

const NoRek = props => {
  const { loading, error, logedIn } = props.auth;
  return (
    <>
      <Container className="norek">
        <Row>
          <Col lg={2}>
            <Image src={alertx} className="alertImage" />
          </Col>
          <Col lg={8}>
            <Container className="norek-body">
              <label>
                Please make payment via M-Banking, E-Banking and ATM to the
                account number listed
              </label>
              <br />
              <label>Account Number : 0696969696969</label>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NoRek);
