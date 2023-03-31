import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "../Carousel/Carousel";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Featured.css";
import NavLink from "react-bootstrap/esm/NavLink";
import Yahoo from "../../images/yahoo.png";
import Ben from "../../images/ben.png";

const Featured = () => {
    return (
        <section className="featured-area">
            <Container>
                <SectionHeading heading="FEATURED IN" />
                <Carousel />
                <Row>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="text-card">
                            <img src={Yahoo} alt="" />
                            <p>
                                New Chapter of Sandbox Game, RobotEra Project is
                                Officially Launched!
                            </p>
                            <NavLink href="#link">Learn More</NavLink>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="text-card">
                            <img src={Ben} alt="" />
                            <p>
                                RobotEra is building a sandbox-like planetary
                                reconstruction metaverse
                            </p>
                            <NavLink href="#link">Learn More</NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Featured;
