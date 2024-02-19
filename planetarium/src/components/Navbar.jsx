import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">PLANETARIUM</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
