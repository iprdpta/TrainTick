import React from "react";
import { Table, Container, Button, Image } from "react-bootstrap";
import "../styles/Admin.css";
import "../styles/Home.css";
import { connect } from "react-redux";
import NavBar from "../component/NavBar";
import AdminPaymentIndex from "../component/AdminPaymentIndex";

class Admin extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <br />
        <Container className="admin-page">
          <Container>
            <label className="admin-translist">Transaction List</label>
          </Container>
        </Container>
        <AdminPaymentIndex/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
