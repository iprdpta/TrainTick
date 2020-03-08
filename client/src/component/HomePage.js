import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../component/Banner";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="title">
          <Row>
            <Col lg={7}>
              <div className="tittle">
                <h1>Welcome, Ticket Seekers !</h1>
                <p>Want to Travel at Good Deal ?</p>
                <p>Login or Register Now !</p>
              </div>
            </Col>
            <Col lg={4}>
              <Banner />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
