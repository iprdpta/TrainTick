import React, { useState, useEffect } from "react";
import { Container, Image, Nav, NavDropdown, Form, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import user from "../assets/user.svg";

const Admin = props => {
  const [showModal, setModal] = useState(false);

  const [nameTrain, setNameTrain] = useState(null);
  const [trainType, setTrainType] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [startStation, setStartStation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [destinationStation, setDestinationStation] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [price, setPrice] = useState(null);
  const [qty, setQty] = useState(null);


  const { loading, error, logedIn } = props.auth;
  return (
    <>
      <label>Admin</label>
      <Nav className="mr-auto">
        <NavDropdown title={<Image className="thumbnail-image" src={user} />}>
          <NavDropdown.Item onClick={() => setModal(true)}>
            Add Ticket
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Modal size="sm" show={showModal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>ADD TICKET</Modal.Title>
        </Modal.Header>
        <Container bsPrefix="modalBody">
          <Form>
            <Form.Group>
              <Form.Label>Train Name</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setNameTrain(e.target.value)}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Train Type</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setTrainType(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Date Start</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setDateStart(e.target.value)}
                type="date"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Start Station</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setStartStation(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setStartTime(e.target.value)}
                type="time"
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Destination</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setDestinationStation(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setArrivalTime(e.target.value)}
                type="time"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setQty(e.target.value)}
              />
            </Form.Group>
            <Button
              bsPrefix="modalButton"
              type="submit"
            >
              ADD TICKET
            </Button>
          </Form>
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
