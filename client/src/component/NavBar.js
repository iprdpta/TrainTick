import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";

import ModalLogin from "../component/ModalLogin";
import ModalRegister from "../component/ModalRegister";
import { getUser } from "../_actions/user";
import { connect } from "react-redux";
import UserNav from "../component/UserNav";
import AdminNav from "../component/AdminNav";
import traintick from "../assets/traintick.png";

const NavBar = props => {
  useEffect(() => {
    props.getUser();
  }, []);

  const { loading, error, logedIn } = props.user;
  return (
    <>
      <Container bsPrefix="header">
        <Container fluid className="logo-container">
          <Image className="logo" src={traintick} />
        </Container>
        {logedIn ? (
          <UserNav />
        ) : (
          <>
            <ModalRegister />
            <ModalLogin />
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
