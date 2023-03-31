import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import Meta from "../../images/meta.png";
import Step3 from "../../images/step3.png";
import Step from "../Step/Step";
import "./Steps.css";

const Steps = () => {
    return (
        <section className="steps-area" id="steps">
            <Container>
                <SectionHeading heading="HOW TO BUY" />
                <div className="step">
                    <Row>
                        <Col lg={6}>
                            <Step
                                heading="STEP 1"
                                text="First, make sure you have the MetaMask wallet installed on your browser, or use one of the wallets to connect to one of the supported wallets (we recommend Trust Wallet).

Purchasing from a desktop browser will give you a smoother buying experience. For this we recommend Metamask.

If you are buying on a mobile phone, we recommend using Trust Wallet and connecting through the built-in browser (just copy https://robotera.io to the Trust Wallet browser)."
                            />
                        </Col>
                        <Col lg={6}>
                            <div className="step-image">
                                <img src={Meta} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="step">
                    <Row>
                        <Col lg={12}>
                            <Step
                                heading="STEP 2"
                                text="Once you have the wallet provider you want to use, click Connect Wallet and select the appropriate option. In the case of a mobile wallet app, you will need to select Wallet Connect.

                                Then you will have 2 options to choose from."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div className="text-card">
                                <h3>BUY TARO WITH ETH</h3>
                                <p>
                                    Once you have enough ETH in your wallet (if
                                    you don't have ETH or USDT, choose option 1
                                    to buy ETH first), you can now exchange your
                                    ETH for TARO.
                                </p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="text-card">
                                <h3>BUY TARO WITH USDT</h3>
                                <p>
                                    Before you start trading, make sure you have
                                    at least $20 USDT in your wallet. Enter the
                                    amount of TARO you wish to purchase (minimum
                                    1,000). Click 'Buy'. You will then be asked
                                    to approve the purchase twice. The first
                                    approval is for the USDT contract and the
                                    second approval is for the transaction
                                    amount. Please make sure you go through two
                                    approval steps to complete the transaction.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="step">
                    <Row>
                        <Col lg={6}>
                            <Step
                                heading="STEP 3"
                                text="After the pre-sale is over, you will be able to claim your TARO tokens. We'll post the details closer, but you'll need to visit the main site https://robotera.io and click the silver 'Claim' button."
                            />
                        </Col>
                        <Col lg={6}>
                            <div className="step-image">
                                <img src={Step3} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Steps;
