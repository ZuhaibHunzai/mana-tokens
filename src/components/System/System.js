import React from "react";
import Container from "react-bootstrap/esm/Container";
import Step from "../Step/Step";
import "./System.css";

const System = () => {
    return (
        <section className="system-area" id="system">
            <Container>
                <Step
                    heading="ECO - SYSTEM"
                    text="RobotEra building a sandbox-like planet-rebuilding metaverse. You will become a robot, managing your own land and participating in the creationof the world. It can also acquire resources from the land, create robot companions.

Here, create everything you can imagine and start a new era with other robots."
                />
            </Container>
        </section>
    );
};

export default System;
