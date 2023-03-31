import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo.png";
import Twitter from "../../images/twitter.png";
import Discord from "../../images/discord.png";
import Earth from "../../images/earth-americas-solid.png";
import Paper from "../../images/paper-plane-solid.png";
import Bell from "../../images/bell-solid.png";
import { useWeb3Functions } from "../../hook/web3.functions";
import { WalletConsumer } from "../../context/wallet/wallet.context";
import { shortenAddress } from "../../utils/helpers";
import "./Header.css";

const Header = () => {
  const { walletConnect, disconnectWallet } = useWeb3Functions();
  const { isWalletConnected, account } = WalletConsumer();

  return (
    <header className="header-area">
      <Navbar expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#steps">HOW TO BUY</Nav.Link>
              <Nav.Link href="#home">PRESALE</Nav.Link>
              <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <div className="social-link">
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
              {
                <div className="other-link">
                  {isWalletConnected && (
                    <div className="other-link">
                      <Nav.Link onClick={disconnectWallet}>
                        {" "}
                        {shortenAddress(account)}
                      </Nav.Link>
                    </div>
                  )}
                  {!isWalletConnected && (
                    <>
                      <div className="other-link">
                        <Nav.Link onClick={walletConnect}>CONNECTt</Nav.Link>
                      </div>
                    </>
                  )}
                </div>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
