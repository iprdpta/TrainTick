import React, { useEffect } from "react";
import { Container, Image, Button, Table } from "react-bootstrap";
import { orderIndex } from "../_actions/order";
import InvoiceModal from "../component/InvoiceModal";
import InvoiceEditModal from "../component/InvoiceEditModal";
import { connect } from "react-redux";
import edit from "../assets/edit.svg";
import quit from "../assets/quit.svg";

const AdminPaymentIndex = ({ order, orderIndex }) => {
  useEffect(() => {
    orderIndex();
  }, []);

  if (order.loading) {
    return <label>Loading... </label>;
  }
  return order.order ? (
    <>
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
            {order.order.map((item, index) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.user && item.user.name}</td>
                <td>
                  {item.ticket && item.ticket.train_name} (
                  {item.ticket && item.ticket.traintype.name})
                </td>
                <td>{item.attachment}</td>
                <td>{item.status}</td>
                <td>
                  <Container fluid>
                    <InvoiceModal data={item} />
                    <InvoiceEditModal data={item} />
                    <Button bsPrefix="admin-button">
                      <Image className="admin-button-icon" src={quit} />
                    </Button>
                  </Container>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  ) : (
    <loading>Loading...</loading>
  );
};

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return { orderIndex: () => dispatch(orderIndex()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminPaymentIndex);
