import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavLink from "react-bootstrap/esm/NavLink";
import { useWeb3Functions } from "../../hook/web3.functions";
import { WalletConsumer } from "../../context/wallet/wallet.context";
import { getContractInstance } from "../../utils/get-contract-instance";
import { ethers } from "ethers";
import { getReferralFromURL } from "../../hook/web3.utils";
import "./Hero.css";
import { getErc20ContractInstance } from "../../utils/get-ERC20-instance";

const Hero = () => {
  const { walletConnect } = useWeb3Functions();
  const { isWalletConnected, account, signer, ethersProvider, isCorrectChain } =
    WalletConsumer();
  const [exchangeRate, setExchangeRate] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [raised, setRaised] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    getValues();
    const getNumberOfTokens = async () => {
      try {
        const getExchangeRate = getContractInstance(ethersProvider);
        const price = await getExchangeRate.exchangeRate();
        const exchangeRate = ethers.utils.formatEther(price);
        setExchangeRate(exchangeRate);
      } catch (err) {
        console.log(err);
      }
    };

    if (account && isCorrectChain) {
      getNumberOfTokens();
    }
  }, [account, isCorrectChain, ethersProvider]);
  const onChange = (event) => {
    const value = event.target.value;
    setTokens(value * exchangeRate);
  };

  const getValues = async () => {
    try {
      const instance = getContractInstance();
      const value = await instance.weiRaised();
      const raised = ethers.utils.formatEther(value);
      setRaised(raised);
    } catch (err) {
      console.log(err, "error");
    }
  };

  const getTotalSupply = async () => {
    try {
      const erc20Instance = getErc20ContractInstance();
      const supply = await erc20Instance.totalSupply();
      const totalSupplyTokens = ethers.utils.formatEther(supply);
      setTotalSupply(totalSupplyTokens);
      console.log(totalSupply);
    } catch (err) {
      console.log(err, "error");
    }
  };
  getTotalSupply();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      const buy = data.get("buy");
      const contractInstance = getContractInstance(signer);
      const referral = getReferralFromURL() || account;
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
                  <p>Sold — 44,417,425 / {totalSupply}</p>
                  <p>Raised — Matic {raised} / Matic 1,800,000</p>
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
                  <p>Sold — 44,417,425 / {{ totalSupply }}</p>
                  <p>Raised — Matic {raised} / Matic 1,800,000</p>
                  <div className="referral">
                    <div>
                      <p className="exchange-text">
                        You will get {tokens} TARO
                      </p>
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
                      onChange={onChange}
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
