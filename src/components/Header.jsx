import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "../Images/logo.jpg";

function Header({ cartCount }) {
  return (
    <Navbar expand="lg" className="header-navbar" sticky="top" style={{
      backgroundColor: "#1a1a2e",
      boxShadow: "0 2px 10px"
    }}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Brand Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="bg-light" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto me-4">
            <Nav.Link href="#" >Home</Nav.Link>
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Men</Nav.Link>
            <Nav.Link href="#">Women</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <button className="cart-btn" type="button">
            Giỏ hàng
            <span className="cart-badge">{cartCount}</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;