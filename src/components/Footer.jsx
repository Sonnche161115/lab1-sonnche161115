import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className="app-footer">
      <Container className="text-center">
        <p>
          <span className="footer-label">Student Name:</span> Nguyễn Cao Sơn
        </p>
        <p>
          <span className="footer-label">Student ID:</span> HE161115
        </p>
        <p>
          <span className="footer-label">Class:</span> SE19D01
        </p>
        <p>
          <span className="footer-label">Email:</span>{" "}
          <a href="sonnche161115@fpt.edu.vn" style={{ color: "#e74c3c" }}>
            sonnche161115@fpt.edu.vn
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
