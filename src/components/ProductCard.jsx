

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductCard({ product, onAddToCart }) {
  return (
    <Card className="product-card h-100">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-name">{product.name}</Card.Title>
        <Card.Text className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </Card.Text>
        {product.description && (
          <Card.Text className="text-muted small">
            {product.description}
          </Card.Text>
        )}
        <Button
          variant="primary"
          className="mt-auto btn-add-cart"
          style={{ backgroundColor: "#1a1a2e", borderColor: "#1a1a2e" }}
          onClick={() => onAddToCart(product)}
        >
          Thêm vào giỏ hàng
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;