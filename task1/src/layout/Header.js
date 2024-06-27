import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-link" onClick={() => navigate("/home")}>
            HOME
          </li>
          <li className="nav-list-link" onClick={() => navigate("/about")}>
            ABOUT
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
