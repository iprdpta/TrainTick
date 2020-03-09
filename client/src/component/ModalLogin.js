import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Form, Alert, Image } from "react-bootstrap";
import { postLogin } from "../_actions/auth";
import { connect } from "react-redux";
import quit from "../assets/quit.svg";

const ModalLogin = props => {
  const { auth, postLogin } = props;
  const [showModal, setModal] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const loginSubmit = async (e, username, password) => {
    e.preventDefault();
    const login = { username, password };
    const log = await postLogin(login);
    console.log(username, password, auth.auth.message, "axxxx");
    if (log.value.message === "Invalid Login") {
      return null;
    } else {
      window.location.reload(false);
    }
  };

  return (
    <>
      <Button
        className="fontx"
        bsPrefix="buttonLogin"
        onClick={() => setModal(true)}
      >
        Login
      </Button>
      <Modal
        className="fontx"
        size="sm"
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
          </Container>
          <Container fluid className="buy-header-title">
            <label className="buy-header-title">LOGIN</label>
          </Container>
        </Modal.Header>
        <Container bsPrefix="modalBody">
          {auth.auth.message === "Invalid Login" ? (
            <Alert variant="danger">Password or email wrong</Alert>
          ) : null}
          {auth.auth.message === "Login Success" ? (
            <Alert variant="success">Login Success</Alert>
          ) : null}

          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                bsPrefix="forms"
                onChange={e => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                bsPrefix="forms"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              bsPrefix="modalButton"
              type="submit"
              onClick={e => loginSubmit(e, username, password)}
            >
              LOGIN
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
    postLogin: login => dispatch(postLogin(login))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
