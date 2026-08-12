



import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <Container className="my-5">
      <h2 className="section-title">Danh Sách Sản Phẩm</h2>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {products &&
          products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ProductList;