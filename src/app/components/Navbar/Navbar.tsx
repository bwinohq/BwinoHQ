import { NavLink, Link } from "react-router-dom";
import Styled from "styled-components";
import Sidebar from "./Sidebar";
import { NavData } from "../../data/navbar";
import Logo from "../../assets/BwinoHQ.svg";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/early-access">
        <img src={Logo} alt="logo" />
      </Link>
      <LinkFlex>
        {NavData.map((item, i) => (
          <NavLinks to={item.path} key={i}>
            {item.title}
          </NavLinks>
        ))}
      </LinkFlex>
      <Sidebar />
    </Nav>
  );
};

const Nav = Styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #080707;
  padding: 1.3rem;
  position: sticky;
  top: 0;
  z-index: 5;

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  @media screen and (min-width: 700px) and (max-width: 999px){
    padding: 1rem 5rem;
  }

  @media screen and (min-width: 1000px){
    padding: 1rem 10rem;
  }
`;

const LinkFlex = Styled.div`
  display: flex;
  gap: 20px;

  .active{
    color: #E96D16;
  }

  @media screen and (max-width: 700px){
    display: none;
  }
`;

const NavLinks = Styled(NavLink)`
  color: #9D9D9E;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  padding: 15px 0;
  position: relative;
  text-decoration: none;

  &:hover {
    color: #E96D16;
    text-decoration: none;
  }

`;

export default Navbar;
