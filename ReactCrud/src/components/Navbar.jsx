import { useLocation, useNavigate } from "react-router-dom";
import http from '../http';
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
  const handleSearch = (event) => {
    event.preventDefault();

    let name = event.target.value;
    http.get("tasks/" + name).then((res) => {
      console.log(res.data.tasks)
    });
  };
  return (
    <nav>
      <div className="search">
        <input
          type="text"
          name="search"
          onChange={handleSearch}
          placeholder="Search a task"
        />
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
