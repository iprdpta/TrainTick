import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import { postLogin } from "../_actions/auth";
import { connect } from "react-redux";

const ModalLogin = props => {
  const [showModal, setModal] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    props.postLogin();
  }, []);

  const loginSubmit = e => {
    e.preventDefault();
    console.log(username, password, "asdsadasdasdasd aaa aaaa a aa");
    const login = { username, password };
    props.postLogin(login);
  };
  const { error, loading } = props.auth;

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
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Container bsPrefix="modalBody">
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
            <Button bsPrefix="modalButton" type="submit" onClick={loginSubmit}>
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
