import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Form, Alert, Image } from "react-bootstrap";
import { registerUser } from "../_actions/auth";
import { connect } from "react-redux";
import quit from "../assets/quit.svg";

const ModalLogin = props => {
  const { auth } = props;
  const [showModal, setModal] = useState(false);

  const [name, setName] = useState(null);
  const [id_card, setIdcard] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);

  const registerSubmit = async (
    e,
    id_card,
    name,
    username,
    email,
    password,
    gender,
    phone,
    address
  ) => {
    e.preventDefault();
    const register = {
      id_card,
      name,
      username,
      email,
      password,
      gender,
      phone,
      address
    };
    const reg = await props.registerUser(register);
    if (
      !reg.value.message === "Email or Username Already Registered" &&
      reg.value.message === "fail"
    ) {
      window.location.reload(false);
    }
  };

  return (
    <>
      <Button bsPrefix="buttonLogin" onClick={() => setModal(true)}>
        Register
      </Button>
      <Modal size="sm" show={showModal} onHide={() => setModal(false)}>
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
            <label className="buy-header-title">REGISTER</label>
          </Container>
        </Modal.Header>
        <Container bsPrefix="modalBody">
          {auth.auth.message === "Email or Username Already Registered" ? (
            <Alert variant="danger">Email or Username Already Registered</Alert>
          ) : null}
          {auth.auth.message === "fail" ? (
            <Alert variant="danger">Please Fill all Empty Forms</Alert>
          ) : null}
          {auth.auth.message === "Register Success" ? (
            <Alert variant="success">Register Success</Alert>
          ) : null}
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setName(e.target.value)}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>ID Card</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setIdcard(e.target.value)}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setUsername(e.target.value)}
                name="username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                onChange={e => setGender(e.target.value)}
                name="gender"
                as="select"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setPhone(e.target.value)}
                name="phone"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setAddress(e.target.value)}
                name="address"
              />
            </Form.Group>
            <Button
              bsPrefix="modalButton"
              type="submit"
              onClick={e =>
                registerSubmit(
                  e,
                  id_card,
                  name,
                  username,
                  email,
                  password,
                  gender,
                  phone,
                  address
                )
              }
            >
              Register
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
  return {
    registerUser: register => dispatch(registerUser(register))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
