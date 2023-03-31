import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Step from "../Step/Step";
import "./Roadmap.css";

const Roadmap = () => {
    return (
        <section className="roadmap-area" id="roadmap">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className="text-center">
                        <Step
                            heading="ROADMAP"
                            text="RobotEra's roadmap is a little different. As our multiverse evolves,
so does our roadmap, with community input.
Every quarter we'll bring you exciting new content and updates!"
                        />
                    </Col>
                </Row>
                <div className="all-map">
                    <Row>
                        <Col lg={4}>
                            <div className="single-map single-map-one map-one">
                                <p>1. Robotera Metaverse Design</p>
                                <p>2. Launch of Public presale</p>
                                <p>3. Robotera Character NFT Design</p>
                                <p>4. Robotera Demo Design</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 4, offset: 8 }}>
                            <div className="single-map single-map-two map-two">
                                <p>1. Robotera Metaverse Overall Design</p>
                                <p>2. 3D Artists Design for Robotera</p>
                                <p>
                                    3. Robotera Demo Video - Imminence Release
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="single-map single-map-one map-three">
                                <p>1. Completion of Public Presale</p>
                                <p>2. Robotera Character NFT Releasee</p>
                                <p>3. Technical Infrastructure Construction</p>
                                <p>
                                    4. Player Self-define Robotera Editor
                                    Release
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 4, offset: 8 }}>
                            <div className="single-map single-map-two map-four">
                                <p>1. Robotera Land NFT Presale</p>
                                <p>
                                    2. Robotera NFT Gallery Launch, Presenting
                                    Character.
                                </p>
                                <p>3. Robotera Character NFT Design</p>
                                <p>4. Robotera Battle System Launch</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="single-map single-map-one map-five">
                                <p>
                                    1. Robotera Metaverse Release, Combining
                                    Robotera World, Robotera Editor, Robotera
                                    Adventure
                                </p>
                                <p>
                                    2. Robotera DAO Establishment with
                                    Continuous Development
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Roadmap;
