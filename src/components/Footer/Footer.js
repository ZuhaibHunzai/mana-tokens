import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Logo from "../../images/logo.png";
import Twitter from "../../images/twitter.png";
import Discord from "../../images/discord.png";
import Earth from "../../images/earth-americas-solid.png";
import Paper from "../../images/paper-plane-solid.png";
import Bell from "../../images/bell-solid.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Nav.Link href="#home" className="footer-logo">
                            <img src={Logo} alt="" />
                        </Nav.Link>
                    </Col>
                    <Col lg={6}>
                        <div className="footer-social-link">
                            <Nav.Link href="#home">
                                <img src={Earth} alt="" />
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <img src={Bell} alt="" />
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <img src={Discord} alt="" />
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <img src={Twitter} alt="" />
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <img src={Paper} alt="" />
                            </Nav.Link>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={8}>
                        <div className="footer-bottom-text">
                            <p>
                                Cryptocurrency may be unregulated in your
                                jurisdiction. The value of cryptocurrencies may
                                go down as well as up. Profits may be subject to
                                capital gains or other taxes applicable in your
                                jurisdiction.
                            </p>
                            <p>
                                "Robotera" and the website are operated by
                                Robotera Metaverse Tech Pte Ltd, (trading as
                                "Robotera"). The Company is registered at
                                9Batery Rd, Singapore, 049910. For more
                                information about "RobotEra", Please write to:
                            </p>
                            <Nav.Link href="#home">
                                Contact@robotera.io
                            </Nav.Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
