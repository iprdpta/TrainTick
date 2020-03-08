import React from "react";
import { Table, Container, Button, Image } from "react-bootstrap";
import "../styles/Admin.css";
import "../styles/Home.css";
import { connect } from "react-redux";
import NavBar from "../component/NavBar";
import InvoiceModal from "../component/InvoiceModal";
import InvoiceEditModal from "../component/InvoiceEditModal";

import edit from "../assets/edit.svg";
import quit from "../assets/quit.svg";

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
          <Container className="admin-table">
            <Table responsive hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Users</th>
                  <th>Ticket</th>
                  <th>Proof of Transfer</th>
                  <th>Payment Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    <Container fluid>
                      <InvoiceModal />
                      <InvoiceEditModal />
                      <Button bsPrefix="admin-button">
                        <Image className="admin-button-icon" src={quit} />
                      </Button>
                    </Container>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
