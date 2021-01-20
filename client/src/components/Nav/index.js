import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a Google Books />
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
    </nav>
  );
}

export default Nav;
