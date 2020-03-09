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
import arrow from "../assets/arrow.svg";

const TicketCard = props => {
  const { loading, error, logedIn } = props.auth;
  return (
    <>
      <Container className="ticketCard shadow">
        <Row>
          <Col lg={3} className="ticket-tabs">
            <Container className="ticket-tab ticket-text">
              <label>Train Ticket</label>
            </Container>
          </Col>
          <Col lg={9}>
            <label className="ticketCard-textx">Train Ticket</label>
            <Row>
              <Col lg={5.5} className="ticketCard-text2">
                <Form.Group>
                  <Form.Label>From</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Row>
                  <Col xs={7}>
                    <Form.Group>
                      <Form.Label>Date of Departure</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col xs={5}>
                    <Form.Check inline label="Round-Trip" />
                  </Col>
                </Row>
              </Col>
              <Col lg={1}>
                <Row noGutters>
                  <Button bsPrefix="buttonReverse">
                    <Image src={arrow} className="buttonReverse-icon" />
                  </Button>
                </Row>
              </Col>
              <Col lg={5.5} className="ticket-text2">
                <Form.Group>
                  <Form.Label>To</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Row>
                  <Col xs={5}>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Adult</Form.Label>
                      <Form.Control as="select">
                        <option>0</option>
                        <option>1</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={5}>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Baby</Form.Label>
                      <Form.Control as="select">
                        <option>0</option>
                        <option>1</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={1}>
                    <Button bsPrefix="buttonSearch">Search</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(TicketCard);
