import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./Hero.css";
import NavLink from "react-bootstrap/esm/NavLink";
import { useWeb3Functions } from "../../hook/web3.functions";
import { WalletConsumer } from "../../context/wallet/wallet.context";
import { getContractInstance } from "../../utils/get-contract-instance";
import { ethers } from "ethers";
import { getReferralFromURL } from "../../hook/web3.utils";

const Hero = () => {
  const { walletConnect } = useWeb3Functions();
  const { isWalletConnected, account, signer } = WalletConsumer();
  const [tokens, setTokens] = useState(0);

  const getNumberOfTokens = (event) => {
    const inputText = event.target.value;
    let oneToken = 0.02;

    const tokens = inputText * oneToken;
    setTokens(tokens);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      const buy = data.get("buy");
      const contractInstance = getContractInstance(signer);

      const referral = getReferralFromURL() || account;
      console.log(referral, "ref");
      const tx = await contractInstance.buy(referral, {
        value: ethers.utils.parseEther(buy),
      });

      await tx.wait();
    } catch (err) {
      console.log(err);
    }
  };

  const onCopyLink = () => {
    const link = window.location.href + `?referral=${account}`;
    navigator.clipboard.writeText(link).then(
      function () {
        console.log(link, "success");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  return (
    <section className="hero-area d-flex align-items-center" id="home">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="hero-text">
              <h2>GET IN EARLY ON THE ROBOTERA PRESALE.</h2>
              <p>The Next Big P2E Metaverse Game!</p>
              <p>
                Build the world of Taro your way. Become a Robot to discover,
                play and earn.
              </p>
              <p>
                The $TARO token will power the whole RobotEra metaverse from
                development to the in-game currency, P2E gameplay, NFTs, and
                in-game store.
              </p>
              <p>
                Buy directly with USDT or ETH. After the presale ends, you will
                be able to claim your $TARO tokens.
              </p>
              <h3>BUY THE $TARO TOKEN NOW!</h3>
            </div>
          </Col>

          {!isWalletConnected && (
            <>
              <Col lg={5}>
                <div className="hero-card">
                  <h3>PRESALE 1</h3>
                  <h3>1 TARO = 0.020 USDT</h3>
                  <h4>PRESALE 1 ENDS SOON</h4>
                  <p>Hurry before stage 2 price increase to $0.025</p>
                  <div className="new-progress-bar">
                    <span className="w50"></span>
                  </div>
                  <p>Sold — 44,417,425 / 90,000,000</p>
                  <p>Raised — $888,348 / $1,800,000</p>
                  <p>You own — 0 TARO</p>
                  <NavLink href="#link" onClick={walletConnect}>
                    CONNECT WALLET
                  </NavLink>
                </div>
              </Col>
            </>
          )}
          {isWalletConnected && (
            <>
              <Col lg={5}>
                <div className="hero-card">
                  <h3>PRESALE 1</h3>
                  <h3>1 TARO = 0.020 USDT</h3>
                  <h4>PRESALE 1 ENDS SOON</h4>
                  <p>Hurry before stage 2 price increase to $0.025</p>
                  <div className="new-progress-bar">
                    <span className="w50"></span>
                  </div>
                  <p>Sold — 44,417,425 / 90,000,000</p>
                  <p>Raised — $888,348 / $1,800,000</p>
                  <div className="referral">
                    <div>
                      <p>You will get {tokens} </p>
                    </div>
                    <div>
                      <button className="referral-btn" onClick={onCopyLink}>
                        Copy Referall
                      </button>
                    </div>
                  </div>
                  <form onSubmit={onSubmit}>
                    <input
                      className="buy-input"
                      type="number"
                      name="buy"
                      placeholder="Enter amount to buy mana tokens"
                      required
                      onChange={getNumberOfTokens}
                      step="any"
                    />
                    <button className="buy-btn" type="submit">
                      Buy
                    </button>
                  </form>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
