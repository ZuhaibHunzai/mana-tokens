import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ heading }) => {
    return (
        <div className="section-heading">
            <h3>{heading}</h3>
        </div>
    );
};

export default SectionHeading;
