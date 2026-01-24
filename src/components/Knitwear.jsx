import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/Knitwear.css";

import knit1 from "../assets/Knitsweaters.jpg";
import knit2 from "../assets/Knitcap.jpg";
import knit3 from "../assets/Knitsocks.jpg";
import knit4 from "../assets/Knitblankets.jpg";

const knitProducts = [
  { id: 1, name: "Baby Sweater", category: "Sweaters", img: knit1 },
  { id: 2, name: "Wool Cap", category: "Caps", img: knit2 },
  { id: 3, name: "Warm Socks", category: "Socks", img: knit3 },
  { id: 4, name: "Knit Blanket", category: "Blankets", img: knit4 },
];

export default function Knitwear() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Sweaters", "Caps", "Socks", "Blankets"];

  const filtered =
    active === "All"
      ? knitProducts
      : knitProducts.filter(item => item.category === active);

  return (
    <section className="knitwear-section">
      <Container>
        <h2 className="section-title">Knitwear Collection</h2>

        {/* CATEGORY FILTER */}
        <div className="knit-filters">
          {categories.map(cat => (
            <Button
              key={cat}
              className={active === cat ? "filter-btn active" : "filter-btn"}
              onClick={() => setActive(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* PRODUCTS */}
        <Row className="g-4">
          {filtered.map(item => (
            <Col md={3} sm={6} key={item.id}>
              <Card className="knit-card">
                <Card.Img src={item.img} />
                <Card.Body className="text-center">
                  <Card.Title>{item.name}</Card.Title>
                  <Button className="shop-btn">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
