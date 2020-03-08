import React, { useEffect } from "react";
import { Container, Image, Nav, NavDropdown } from "react-bootstrap";
import { getUser } from "../_actions/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import userx from "../assets/user.svg";

const UserNav = props => {
  useEffect(() => {
    props.getUser();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  const { loading, error, logedIn, user } = props.user;
  if (loading) {
    return <label>Loading... </label>;
  }
  return (
    <>
      <label>{user.name}</label>
      <Nav className="mr-auto">
        <NavDropdown title={<Image className="thumbnail-image" src={userx} />}>
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/mytickets">My Tickets</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>Payment</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleLogout()}>
            Log Out
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return { getUser: () => dispatch(getUser()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
