import { useState } from "react";
import { Container, Button, Row, Col, Card, Carousel, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

// DATA
import products from "../assets/data/products";

// HERO & BANNERS
import heroImage from "../assets/banner.jpg";
import dealsImage from "../assets/deals.jpg";
import saleImage from "../assets/sale.jpg";
import promoImage from "../assets/promo.jpg";

// AGE CATEGORY IMAGES
import age1 from "../assets/0-3.jpg";
import age2 from "../assets/3-6.jpg";
import age3 from "../assets/6-12.jpg";
import age4 from "../assets/1year.jpg";

export default function Hero() {
  const [showCoupons, setShowCoupons] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <div className="main-banner">
                <img src={heroImage} className="hero-img" alt="Hero Banner" />
                <div className="banner-overlay">
                  <h2>Adorable</h2>
                  <p>BABY WEAR</p>
                  <Link to="/shop">
                    <Button className="hero-btn">SHOP NOW</Button>
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="side-banner">
                <img src={dealsImage} alt="Deals" />
                <div className="side-overlay">
                  <h4>Top Deals</h4>
                  <Button className="explore-btn">Explore Now</Button>
                </div>
              </div>

              <div className="side-banner">
                <img src={saleImage} alt="Sale" />
                <div className="side-overlay">
                  <h4>Big Sale</h4>
                  <Button className="explore-btn">Explore Now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROMO BANNER */}
     <section className="promo-banner">
  <Container fluid className="p-0 position-relative">
    <img
      src={promoImage}
      alt="Promo Banner"
      className="promo-img"
    />

    <div className="promo-overlay">
      <h2>New Arrivals Are Here 🍼</h2>
      <p>Comfortable & Trendy Baby Wear</p>
      <Link to="/shop">
        <Button className="promo-btn">Shop Collection</Button>
      </Link>
    </div>
  </Container>
</section>


      {/* LATEST RELEASED */}
      <section className="latest-section">
        <Container>
          <h3 className="section-title">Latest Released 🆕</h3>
          <Row className="g-4">
            {products
              .filter(item => item.isLatest)
              .slice(0, 4)
              .map(item => (
                <Col md={3} sm={6} key={item.id}>
                  <Card className="latest-card">
                    <Card.Img src={item.image} />
                    <Card.Body className="text-center">
                      <Card.Title>{item.title}</Card.Title>
                      <p>₹{item.price}</p>
                      <Button size="sm">Shop Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* TRENDING CAROUSEL */}
     <section className="carousel-section">
  <Container>
    <h3 className="section-title">Trending Now 🔥</h3>

    <div className="trending-scroll">
      {products
        .filter(item => item.isTrending)
        .map(item => (
          <Card className="trending-card" key={item.id}>
            <Card.Img src={item.image} alt={item.title} />
            <Card.Body className="text-center">
              <Card.Title>{item.title}</Card.Title>
              <p>₹{item.price}</p>
              <Button size="sm">Shop Now</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  </Container>
</section>


      {/* AGE CATEGORY */}
      <section className="age-section">
        <Container>
          <Row className="g-4">
            {[{ title: "0 – 3 Months", img: age1 },
              { title: "3 – 6 Months", img: age2 },
              { title: "6 – 12 Months", img: age3 },
              { title: "1 – 2 Years", img: age4 }].map((item, index) => (
              <Col md={3} sm={6} key={index}>
                <Card className="age-card">
                  <Card.Img src={item.img} />
                  <Card.Body className="text-center">
                    <Card.Title>{item.title}</Card.Title>
                    <Button size="sm">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* COUPON BUTTON */}
      <section className="coupon-toggle">
        <Container className="text-center">
          <Button onClick={() => setShowCoupons(!showCoupons)}>
            {showCoupons ? "Hide Coupons" : "View Coupons"}
          </Button>
        </Container>
      </section>

      {/* COUPON ALERT SECTIONS */}
      {showCoupons && (
        <section className="coupon-alerts">
          <Container>

            {/* ALERT 1 */}
            <Alert variant="warning">
              🎉 Flat ₹500 OFF – Code: <strong>BABY500</strong>
              <Button size="sm" className="float-end" onClick={() => navigator.clipboard.writeText("BABY500")}>Copy</Button>
            </Alert>

            {/* ALERT 2 */}
            <Alert variant="success">
              🍼 10% OFF – Code: <strong>FIRST10</strong>
              <Button size="sm" className="float-end" onClick={() => navigator.clipboard.writeText("FIRST10")}>Copy</Button>
            </Alert>

            {/* ALERT 3 */}
            <Alert variant="info">
              🚚 Free Shipping – Code: <strong>FREESHIP</strong>
              <Button size="sm" className="float-end" onClick={() => navigator.clipboard.writeText("FREESHIP")}>Copy</Button>
            </Alert>

          </Container>
        </section>
      )}
    </>
  );
}
