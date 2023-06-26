import React from "react";

import "./style.css";
const IconHolder = ({ src }: any) => {
  return (
    <div>
      <img className="holder" src={src} />
    </div>
  );
};

export default IconHolder;
