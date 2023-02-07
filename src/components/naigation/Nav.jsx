import { Link } from "react-router-dom";

import './Nav.css';

const Nav = () => {
  return (
    <div className="nav-container d-flex flex-column justify-content-center align-items-center">
        <ul>
            <li>

                <Link to={"0"}>Tourism front page</Link>
            </li>
            <li>

                <Link to={"1"}>My favorite places</Link>
            </li>
            <li>
                <Link to={"2"}>Detailed view</Link>

            </li>
        </ul>
    </div>
  );
};

export default Nav;