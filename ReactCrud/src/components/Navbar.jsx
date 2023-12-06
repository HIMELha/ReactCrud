import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const SearchBtn = {
    padding: "9px 13px",
    fontSize: "13px",
  };
  const navigator = useNavigate();
  const current = useLocation();
  const NavigateTos = () => {
    if (current.pathname != "/") {
      navigator("/");
    } else {
      navigator("/create");
    }
  };
  return (
    <nav>
      <div className="search">
        <input type="text" name="search" placeholder="Search a task" />
        <button className="btn" style={SearchBtn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <button onClick={NavigateTos} className="btn">
        <i className="fa-regular fa-file"></i>
        <span>
          {current.pathname != "/" ? "Back to home" : "Create new task"}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
