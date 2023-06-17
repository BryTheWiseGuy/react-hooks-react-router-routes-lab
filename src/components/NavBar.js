import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <br />
    <NavLink to="/Movies" exact>
      Movies
    </NavLink>
    <br />
    <NavLink to="/Directors" exact>
      Directors
    </NavLink>
    <br />
    <NavLink to="/Actors" exact>
      Actors
    </NavLink>
  </div>;
}

export default NavBar;
