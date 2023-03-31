import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import image1 from "../../images/robotera.png";
import image2 from "../../images/coinsniper.png";
import "./Audited.css";

const Audited = () => {
    return (
        <section className="audited-area">
            <Container>
                <SectionHeading heading="Fully audited and KYC Verified" />
                <Row>
                    <Col lg={{ span: 3, offset: 3 }}>
                        <div className="audited-image">
                            <img src={image1} alt="" />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="audited-image">
                            <img src={image2} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className="audited-text">
                            <p>
                                Contract code fully audited by SharkTeam and is
                                completely guaranteed and safe. <br /> Project
                                and team KYC verified by Coinsniper, for added
                                project security.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Audited;
