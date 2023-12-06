import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function header() {
  return (
    <header>
      <Link to="/">
        <h2>
          <i className="fa-brands fa-laravel red"></i> n{" "}
          <i className="sky fa-brands fa-react"></i> task App
        </h2>
      </Link>
      <div className="flex-gap">
        <button
          className="btn"
          title="Sorry, You can't see any promotions"
          onClick={() => {
            toast.loading("Device hacking under process");
            window.open("https://postbd.xyz", "_blank");
          }}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>sponsor 😎
        </button>
        <button
          className="btn"
          onClick={() => {
            toast.info("Thank you for your support ❤💝");

            window.open("https://github.com/HIMELha/ReactCrud", "_blank");
          }}
        >
          <i className="fa-brands fa-github"></i>Give a star
        </button>
      </div>
    </header>
  );
}

export default header;
