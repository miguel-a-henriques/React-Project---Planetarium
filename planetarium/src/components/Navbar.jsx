import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="linkOne">
              PLANETARIUM
            </Link>
          </li>
          <li>
            <Link to="/About" className="linkTwo">
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
