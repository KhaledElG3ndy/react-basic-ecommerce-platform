import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <h1>Khaled ElGendy</h1>
      <div className="icons">
        <ul>
          <li>
            <a href="https://github.com/KhaledElG3ndy">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="mailto:khaled.elgendy.cs@gmail.com">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:khaled.elgendy.cs@gmail.com">
              <IoMdMail />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/KhaledElGendy/">
              <SiLeetcode />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
