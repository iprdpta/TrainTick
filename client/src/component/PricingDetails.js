import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import camera from "../assets/camera.svg";
import "../styles/Invoice.css";
import { getOrderDetail } from "../_actions/order";
import { useParams } from "react-router-dom";
import ProofTransfer from "../component/ProofTransfer";
import { uploadProof } from "../_actions/order";

const PricingDetails = ({ getOrderDetail, uploadProof, order }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    getOrderDetail(id);
    uploadProof();
  }, []);

  const handlePay = file => {
    const formData = new FormData();
    formData.append("payment", file);
    uploadProof(formData, id);
  };

  return (
    <>
      <Row>
        <Col lg={8}>
          <Container>
            <label className="invoice-pricing">Pricing Details</label>
          </Container>
          <Container fluid className="invoice-pricing-details">
            <Row className="invoice-pricing-row">
              <Col lg={5}>
                <strong>Ticket</strong>
              </Col>
              <Col lg={2}>
                <strong>Qty</strong>
              </Col>
              <Col lg={5}>
                <strong>Price</strong>
              </Col>
            </Row>
            <Row>
              <Col lg={5}>
                <label>
                  {order.order.ticket && order.order.ticket.train_name} ( Adult
                  )
                </label>
              </Col>
              <Col lg={2}>
                <label>{order.order && order.order.qty}</label>
              </Col>
              <Col lg={5}>
                <label>
                  Rp{order.order.ticket && order.order.adult_price},-
                </label>
              </Col>
            </Row>
            <Row>
              <Col lg={5}>
                <label>
                  {order.order.ticket && order.order.ticket.train_name} ( Baby )
                </label>
              </Col>
              <Col lg={2}>
                <label>{order.order && order.order.qty_baby}</label>
              </Col>
              <Col lg={5}>
                <label>
                  Rp{order.order.ticket && order.order.baby_price},-
                </label>
              </Col>
            </Row>
            <Row noGutters className="invoice-pricing-total">
              <Col lg={8}>
                <label className="invoice-pricing-total-text">Total</label>
              </Col>
              <Col lg={4}>
                <label className="invoice-pricing-total-text">
                  Rp{order.order && order.order.total_price},-
                </label>
              </Col>
            </Row>
          </Container>
          <br />
          <Container fluid>
            <Button onClick={() => handlePay(file)}>Pay Now</Button>
          </Container>
        </Col>
        <Col lg={4}>
          <Container>
            <Container className="invoice-upload">
              {preview ? (
                <Card className="bg-dark text-white">
                  <Card.Img
                    alt="Attachment card"
                    style={{ height: "180px" }}
                    src={preview}
                  />
                </Card>
              ) : (
                <Card className="bg-dark text-white">
                  <Image className="invoice-camera-icon" src={camera} />
                </Card>
              )}
            </Container>
            <Container className="invoice-upload-text">
              <form enctype="multipart/form-data">
                <input
                  className="invoice-choose-file"
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  name="payment"
                  onChange={e => {
                    setFile(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </form>
            </Container>
          </Container>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = state => {
  return { order: state.order };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrderDetail: id => dispatch(getOrderDetail(id)),
    uploadProof: (formData, id) => dispatch(uploadProof(formData, id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PricingDetails);
