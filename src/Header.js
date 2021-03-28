import React from "react";

const memStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px 0px",
};

function Header() {
  return (
    <div style={memStyle}>
      <h1 style={{ borderBottom: "1px solid black" }}>
        Meme
      </h1>
    </div>
  );
}

export default Header;
