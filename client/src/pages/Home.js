import React from "react";
import { Container, Button, Modal, Form, Navbar } from "react-bootstrap";
import "../styles/Home.css";
import "../styles/Modal.css";
import HomePage from "../component/HomePage";
import { registerUser, postLogin } from "../_actions/auth";
import { connect } from "react-redux";
import ModalLogin from "../component/ModalLogin";
import ModalRegister from "../component/ModalRegister";
import NavBar from "../component/NavBar";
import TicketCard from "../component/TicketCard";
import TicketList from "../component/TicketList";

class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <HomePage />
        <TicketCard />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
