import React from "react";
import RotateLoader from "react-spinners/RotateLoader";

const Searching = () => (
  <div className="Searching mb-5">
    <RotateLoader
      loading
      size={60}
      margin={50}
      color="#343a40"
      css={{ display: "block", margin: "7rem auto 7rem auto" }}
    />
  </div>
);

export default Searching;
