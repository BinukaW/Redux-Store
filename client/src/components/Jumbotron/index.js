import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 90, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;