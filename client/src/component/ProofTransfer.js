import React, { useState, useEffect } from "react";
import { Container, Image, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import camera from "../assets/camera.svg";
import "../styles/Invoice.css";
import { uploadProof } from "../_actions/order";
import { useParams } from "react-router-dom";

const ProofTransfer = ({ uploadProof, order }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    uploadProof(id);
  }, []);

  const handlePay = (id, file) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("payment", file);
    uploadProof(formData);
  };

  return (
    <>
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
    </>
  );
};

const mapStateToProps = state => {
  return { order: state.order };
};

const mapDispatchToProps = dispatch => {
  return { uploadProof: formData => dispatch(uploadProof(formData)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProofTransfer);
