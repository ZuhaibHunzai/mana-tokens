import React from "react";
import "./Step.css";

const Step = ({ heading, text }) => {
    return (
        <div className="single-step">
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    );
};

export default Step;
