import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Nav,
  NavDropdown,
  Form,
  Modal,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import user from "../assets/user.svg";
import { Link, Redirect } from "react-router-dom";
import { postTicket } from "../_actions/ticket";

const Admin = ({ postTicket }) => {
  const [showModal, setModal] = useState(false);

  const [train_name, train_namex] = useState(null);
  const [train_type, train_typex] = useState(null);
  const [depart, departx] = useState(null);
  const [depart_station, depart_stationx] = useState(null);
  const [start_date, start_datex] = useState(null);
  const [start_time, start_timex] = useState(null);
  const [destination, destinationx] = useState(null);
  const [destination_station, destination_stationx] = useState(null);
  const [arrival_date, arrival_datex] = useState(null);
  const [arrival_time, arrival_timex] = useState(null);
  const [date_time, date_timex] = useState(null);
  const [price, pricex] = useState(null);
  const [qty, qtyx] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleAdd = async e => {
    e.preventDefault();
    const addtick = {
      train_name,
      train_type,
      depart,
      depart_station,
      start_date,
      start_time,
      destination,
      destination_station,
      arrival_date,
      arrival_time,
      date_time,
      price,
      qty
    };
    const x = await postTicket(addtick);
    if (x) {
      window.location.reload(false);
    }
  };

  return (
    <>
      <label>Admin</label>
      <Nav className="mr-auto">
        <NavDropdown title={<Image className="thumbnail-image" src={user} />}>
          <NavDropdown.Item onClick={() => setModal(true)}>
            Add Ticket
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleLogout()}>
            <Link to="/">Logout</Link>
          </NavDropdown.Item>
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
                onChange={e => train_namex(e.target.value)}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Train Type</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => train_typex(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Depart</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => departx(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Depart Station</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => depart_stationx(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => start_datex(e.target.value)}
                type="date"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                bsPrefix="forms"
                type="time"
                onChange={e => start_timex(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Destination</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => destinationx(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Destination Station</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => destination_stationx(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Arrival Date</Form.Label>
              <Form.Control
                bsPrefix="forms"
                type="date"
                onChange={e => arrival_datex(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control
                bsPrefix="forms"
                type="time"
                onChange={e => arrival_timex(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date Time</Form.Label>
              <Form.Control
                bsPrefix="forms"
                type="date"
                onChange={e => date_timex(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => pricex(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Qty</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => qtyx(e.target.value)}
              />
            </Form.Group>
            <Button
              bsPrefix="modalButton"
              type="submit"
              onClick={e => handleAdd(e)}
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
  return { postTicket: addtick => dispatch(postTicket(addtick)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
