import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavData } from "../../data/navbar";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SideNav>
      <FaBars onClick={showSidebar} size="25" color="#fff" />
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <Link to="#" className="close">
            <AiOutlineClose onClick={() => setSidebar(false)} size="25" color="#fff" />
          </Link>
          {NavData.map((item, i) => (
            <li key={i} className="nav-text">
              <Link to={item.path}>
                <p>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SideNav>
  );
};

const SideNav = styled.div`
  display: block;
  z-index: 99;

  @media screen and (min-width: 700px) {
    display: none;
  }

  .nav-menu-active {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    min-height: 100vh;
    width: 200px;
    background: #080707;
    border-left: 1px #080707;
    transition: width 900ms cubic-bezier(0.25, 0.1, 0.24, 1);
  }
  .nav-menu {
    width: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
  }

  .nav-menu-active.active {
    left: 0;
    transition: width 900ms cubic-bezier(0.25, 0.1, 0.24, 1);
  }

  .close {
      margin-bottom: 50px;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 0px 10px 0px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #9D9D9E;
    font-weight: 700;
    font-size: 16px;
    height: 100%;
  }

  .nav-text a:hover {
    color: #E96D16;
  }

  .nav-menu-items {
    width: 100%;
  }
`;

export default Sidebar;
