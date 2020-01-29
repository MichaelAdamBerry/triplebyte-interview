import React from "react";

//stateless functional component

export const SiteTitle = ({ title }) => {
  return (
    <div className="divTitle">
      <h1>{title}</h1>
    </div>
  );
};
