import { Link } from "react-router-dom";
import "./Header.css";
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  const links = ["Home", "About", "Contact"];
  return (
    <div className="Header">
      <div className="Logo">Trendy</div>
      <div className="Links">
        <ul className="nav-links">
          {links.map((ele) => (
            <li>
              <Link
                className={ele.toString()}
                to={ele == "Home" ? "/" : `/${ele}`}
              >
                {ele}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <div className="cart">
          <Link to="/Cart" className="cart-area">
            <FaCartArrowDown className="cart-icon" />
          </Link>
        </div>
        <div className="join">
          <button className="joinbtn">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
