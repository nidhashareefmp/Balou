import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/Hero.css";
import { Link } from "react-router-dom";


import heroImage from "../assets/banner.jpg";
import dealsImage from "../assets/deals.jpg";
import saleImage from "../assets/sale.jpg";

import age1 from "../assets/0-3.jpg";
import age2 from "../assets/3-6.jpg";
import age3 from "../assets/6-12.jpg";
import age4 from "../assets/1year.jpg";

export default function Hero() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-section">
                <Container>
                    <Row className="align-items-center g-4">
                        {/* LEFT MAIN BANNER */}
                        <Col md={6}>
                            <div className="main-banner">
                                <img src={heroImage} className="hero-img" />
                                <div className="banner-overlay">
                                    <h2>Adorable</h2>
                                    <p>BABY WEAR</p>
                                    <Link to="/shop">

                                    <Button className="hero-btn">SHOP NOW</Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        {/* RIGHT SIDE BANNERS */}
                        <Col md={6}>
                            <div className="side-banner">
                                <img src={dealsImage} />
                                <div className="side-overlay">
                                    <h4>Top Deals</h4>
                                    <Button className="explore-btn">Explore Now</Button>
                                </div>
                            </div>

                            <div className="side-banner">
                                <img src={saleImage} />
                                <div className="side-overlay">
                                    <h4>Big Sale</h4>
                                    <Button className="explore-btn">Explore Now</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* AGE CATEGORY CARDS */}
            <section className="age-section">
                <Container>
                    <Row className="g-4">
                        {[
                            { title: "0 – 3 Months", img: age1 },
                            { title: "3 – 6 Months", img: age2 },
                            { title: "6 – 12 Months", img: age3 },
                            { title: "1 – 2 Years", img: age4 },
                        ].map((item, index) => (
                            <Col md={3} sm={6} key={index}>
                                <Card className="age-card">
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body className="text-center">
                                        <Card.Title>{item.title}</Card.Title>
                                        <Button className="age-btn">Shop Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}
