import React from "react";
import Container from "react-bootstrap/esm/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Whitepaper.css";

const Whitepaper = () => {
    return (
        <section className="whitepaper-area">
            <Container>
                <SectionHeading heading="READ WHITEPAPER" />
                <NavLink href="#">READ WHITEPAPER</NavLink>
            </Container>
        </section>
    );
};

export default Whitepaper;
