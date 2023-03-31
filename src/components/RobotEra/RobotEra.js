import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./RobotEra.css";

const RobotEra = () => {
    return (
        <section className="robotera">
            <Container>
                <SectionHeading heading="RobotEra TOKEN" />
                <div className="robotera-text">
                    <p>
                        Add TARO tokens to your wallet using the contract
                        information below. <br />
                        $TARO tokens will appear in your wallet after you have
                        claimed them.
                    </p>
                    <ul>
                        <li>
                            <span>
                                $TARO Verified Smart Contract Address::{" "}
                            </span>
                            0xB6B54eA09f7eF540
                        </li>
                        <li>
                            <span>PROJECT NAME: RobotEra:</span> Robotera
                        </li>
                        <li>
                            <span>Token Symbol : TARO:</span> TARO
                        </li>
                        <li>
                            <span>Blockchain Ethereum:</span> ERC20: ERC20
                        </li>
                        <li>
                            <span>Total Supply ::</span> 1,800,000,000
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default RobotEra;
