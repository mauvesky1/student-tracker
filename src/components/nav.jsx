import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <>
      <Link to="/">
        {" "}
        <button>Home</button>{" "}
      </Link>

      <Link to="/students">
        {" "}
        <button>Students</button>{" "}
      </Link>
    </>
  );
}

export default Nav;
