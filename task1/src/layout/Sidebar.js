import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <div onClick={() => navigate("/home")}>HOME</div>
      <div onClick={() => navigate("/about")}>ABOUT</div>
    </nav>
  );
}

export default Sidebar;
