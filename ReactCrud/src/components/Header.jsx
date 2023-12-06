import { Link } from "react-router-dom";
function header() {
  return (
    <header>
      <Link to='/'><h2>React Laravel Crud App</h2></Link>
      <div className="flex-gap">
        <button className="btn" title="nah vai kew dey nai">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>Sponsers 😎 
        </button>
        <button className="btn">
          <i className="fa-brands fa-github"></i>Give a star
        </button>
      </div>
    </header>
  );
}

export default header