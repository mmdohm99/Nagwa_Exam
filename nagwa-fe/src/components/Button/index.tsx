import React from "react";
import "./style.css";
interface Props {
  text: string;
  handleClick: () => void;
  disable?: boolean;
  width?: string;
}
const Button: React.FC<Props> = ({ text, handleClick, disable, width }) => {
  return (
    <>
      <button
        style={{ width }}
        className="btn"
        disabled={disable}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
