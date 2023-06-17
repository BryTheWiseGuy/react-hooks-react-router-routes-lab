import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <br></br>
    <NavLink to="/Movies" exact>
      Movies
    </NavLink>
    <br></br>
    <NavLink to="/Directors" exact>
      Directors
    </NavLink>
    <br></br>
    <NavLink to="/Actors" exact>
      Actors
    </NavLink>
  </div>;
}

export default NavBar;
