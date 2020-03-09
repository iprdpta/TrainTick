import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Button,
  Card,
  Modal
} from "react-bootstrap";
import { connect } from "react-redux";
import camera from "../assets/camera.svg";
import "../styles/Invoice.css";
import { getOrderDetail } from "../_actions/order";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { uploadProof } from "../_actions/order";

const PricingDetails = ({ getOrderDetail, uploadProof, order }) => {
  const [show, setShow] = useState(false);
  const [showx, setShowx] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    getOrderDetail(id);
    uploadProof();
  }, []);

  const handlePay = (file, e) => {
    if (file) {
      const formData = new FormData();
      formData.append("payment", file);
      uploadProof(formData, id);
      setShow(true);
    } else {
      setShowx(true);
    }
  };

  const attach = `../images/payment-1583730105262.jpg`;

  if (order.loading) {
    return <label>Loading... </label>;
  }
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
                  {order.order?.ticket && order.order?.ticket?.train_name}
                  <br />
                  {order.order?.ticket && order.order.ticket.traintype.name}
                </label>
              </Col>
              <Col lg={2}>
                <label>{order.order && order.order.qty}</label>
              </Col>
              <Col lg={5}>
                <label>
                  Rp{order.order?.ticket && order.order.ticket.price},-
                </label>
              </Col>
            </Row>
            <Row noGutters className="invoice-pricing-total">
              <Col lg={8}>
                <label className="invoice-pricing-total-text">Total</label>
              </Col>
              <Col lg={4}>
                <label className="invoice-pricing-total-text">
                  <Image
                    src={`../images/${order.order.attachment}`}
                  ></Image>
                  Rp{order.order && order.order.attachment},-
                </label>
              </Col>
            </Row>
          </Container>
          <br />
          <Button bsPrefix="invoice-button-pay" onClick={() => handlePay(file)}>
            Pay Now
          </Button>
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
      <Link to="/mytickets">
        <Modal
          className="fontx"
          size="sm"
          show={show}
          onHide={() => setShow(false)}
        >
          <Container bsPrefix="modalBody">
            <label>Payment Success !!!</label>
          </Container>
        </Modal>
      </Link>

      <Modal className="fontx" show={showx} onHide={() => setShowx(false)}>
        <Container bsPrefix="modalBody">
          <label>Please Upload Your Proof of Transfer</label>
        </Container>
      </Modal>
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
