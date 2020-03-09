import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getOrderDetail } from "../_actions/order";
import { useParams } from "react-router-dom";
import traintick from "../assets/traintick.png";
import "../styles/Invoice.css";

const CostumerInvoice = ({ getOrderDetail, order }) => {
  const { id } = useParams();
  useEffect(() => {
    getOrderDetail(id);
  }, []);

  if (order.loading) {
    return <label>Loading... </label>;
  }
  return (
    <>
      <Container className="invoice-costumer">
        <Container fluid className="invoice-logo-container">
          <Image className="invoice-logo" src={traintick} />
        </Container>
        <Row className="invoice-costumer-detail">
          <Col lg={2}>
            <strong>ID Card</strong>
          </Col>
          <Col lg={3}>
            <strong>Customer</strong>
          </Col>
          <Col lg={3}>
            <strong>Phone Number</strong>
          </Col>
          <Col lg={3}>
            <strong>Email</strong>
          </Col>
        </Row>
        <Row className="invoice-costumer-detailx">
          <Col lg={2}>
            <label></label>
          </Col>
          <Col lg={3}>
            <label>{order.order?.user && order.order.user.name}</label>
          </Col>
          <Col lg={3}>
            <label>{order.order?.user && order.order.user.phone}</label>
          </Col>
          <Col lg={3}>
            <label>{order.order?.user && order.order.user.email}</label>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return { getOrderDetail: id => dispatch(getOrderDetail(id)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CostumerInvoice);
