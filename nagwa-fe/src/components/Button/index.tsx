import React from "react";
import "./style.css";
interface Props {
  text: string;
  handleClick: () => void;
  disable?: boolean;
  width?: string;
  height?: string;
}
const Button: React.FC<Props> = ({
  text,
  handleClick,
  disable,
  width,
  height,
}) => {
  return (
    <>
      <button
        style={{ width, height }}
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
