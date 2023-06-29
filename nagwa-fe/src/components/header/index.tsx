import React from "react";

const Header = ({ subTitle, title }: any) => {
  return (
    <>
      {" "}
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </>
  );
};

export default Header;
