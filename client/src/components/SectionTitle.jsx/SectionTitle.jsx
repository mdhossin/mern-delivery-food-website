import React from "react";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;
