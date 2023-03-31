import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import Team1 from "../../images/team-1.png";
import Team2 from "../../images/team-2.png";
import Team3 from "../../images/team-3.png";
import pow1 from "../../images/aws.png";
import pow2 from "../../images/eth.png";
import pow3 from "../../images/trust.png";
import pow4 from "../../images/met.png";
import "./Team.css";
import NavLink from "react-bootstrap/esm/NavLink";

const Team = () => {
    return (
        <>
            <section className="team-area">
                <Container>
                    <SectionHeading heading="MEET THE TEAM" />
                    <div className="team-member">
                        <Row>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <Row>
                                    <Col lg={4}>
                                        <div className="single-member">
                                            <img src={Team1} alt="" />
                                            <div className="team-text">
                                                <h3>Jason Chan </h3>
                                                <p>CEO & Co-Founder</p>
                                                <span></span>

                                                <NavLink href="">
                                                    Jason Chan | LinkedIn
                                                </NavLink>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="single-member">
                                            <img src={Team2} alt="" />
                                            <div className="team-text">
                                                <h3>Alex Wong </h3>
                                                <p>COO</p>
                                                <span></span>

                                                <NavLink href="">
                                                    Alex Wong | LinkedIn
                                                </NavLink>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="single-member">
                                            <img src={Team3} alt="" />
                                            <div className="team-text">
                                                <h3>Slimane Lee</h3>
                                                <p>CTO & Co-Founder</p>
                                                <span></span>

                                                <NavLink href="">
                                                    Slimane Lee | LinkedIn
                                                </NavLink>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="powered-area">
                    <Container>
                        <SectionHeading heading="POWERED BY" />
                        <Row>
                            <Col lg={3}>
                                <div className="single-powered">
                                    <img src={pow1} alt="" />
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="single-powered">
                                    <img src={pow2} alt="" />
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="single-powered">
                                    <img src={pow3} alt="" />
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="single-powered">
                                    <img src={pow4} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Team;
