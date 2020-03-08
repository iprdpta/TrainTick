import React from "react";
import { Container, Button, Modal, Form, Navbar } from "react-bootstrap";
import "../styles/Home.css";
import "../styles/Modal.css";
import HomePage from "../component/HomePage";
import { registerUser, postLogin } from "../_actions/auth";
import { connect } from "react-redux";
import NavBar from "../component/NavBar";
import MyTicketList from "../component/MyTicketsList";
import { getMyTicket } from "../_actions/ticket";

class MyTickets extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <br />
        <MyTicketList />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);
