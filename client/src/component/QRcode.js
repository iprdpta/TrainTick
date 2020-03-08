import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import qrcodes from "../assets/frame.png";
import { getOrderDetail } from "../_actions/order";
import { useParams } from "react-router-dom";
import "../styles/Invoice.css";

const QRcode = ({ getOrderDetail, order }) => {
  const { id } = useParams();
  useEffect(() => {
    getOrderDetail(id);
  }, []);
  if (order.loading) {
    return <label>Loading... </label>;
  }
  return (
    <>
      <Container>
        <Row noGutters className="invoice-qrcode-header">
          <Col lg={8}>
            <Container>
              <label className="invoice-text-train">Train</label>
            </Container>
            <Container>
              <strong className="invoice-text-date">Saturday</strong>
              <label className="invoice-text-date">, 29 Februari 2020</label>
            </Container>
          </Col>
          <Col lg={4}>
            <Image src={qrcodes} className="qrcodes" />
          </Col>
        </Row>
        <Container className="invoice-qrcode-body">
          <Container>
            <label className="invoice-text-train-name">Argo Wilis</label>
            <br />
            <label className="invoice-text-train-type">Eksekutif (H)</label>
          </Container>
          <Row>
            <Col lg={2}></Col>
            <Col lg={5}>
              <label className="invoice-text-bold">{order.order.ticket && order.order.ticket.start_time}</label>
              <br />
              <label className="invoice-text-x">{order.order.ticket && order.order.ticket.start_date}</label>
              <br />
              <label className="invoice-text-bold">{order.order.ticket && order.order.ticket.arrival_time}</label>
              <br />
              <label className="invoice-text-x">{order.order.ticket && order.order.ticket.arrival_date}</label>
            </Col>
            <Col lg={5}>
              <label className="invoice-text-bold">{order.order.ticket && order.order.ticket.depart}</label>
              <br />
              <label className="invoice-text-x">{order.order.ticket && order.order.ticket.depart_station}</label>
              <br />
              <label className="invoice-text-bold">{order.order.ticket && order.order.ticket.destination}</label>
              <br />
              <label className="invoice-text-x">{order.order.ticket && order.order.ticket.destination_station}</label>
            </Col>
          </Row>
        </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(QRcode);
