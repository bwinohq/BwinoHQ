import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <Layout backgroundColor="#FCFBFB">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
      <Not>
        <h1><span>404:</span> Page not found</h1>
        <p>Sorry, but the page you are trying to access does not exist</p>
        <Link to="/early-access" className="button">
          <button>Home</button>
        </Link>
      </Not>
      </motion.div>
    </Layout>
  )
}

const Not = styled.div`
  margin-top: 8rem;
  background-image: url("/images/Brown-Teddy.svg"), url("/images/White-Teddy.svg");
  background-size: 150px;
  background-position: bottom left, bottom right; 
  background-repeat: no-repeat, no-repeat;
  min-height: 80vh;

  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 54px;
    text-align: center;

    & span {
      color: #F87D26;
    }
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #080707;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  button {
    padding: 1rem 3rem;
    background-color: #080707;
    color: #fff;
    box-shadow: 0px 2.5px 40px rgba(12, 18, 32, 0.05);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    transition: 0.4s;

    &:hover{
      background-color: #080707;
      color: #E96D16;
    }
  }
  @media screen and (min-width: 820px) and (max-width: 1000px){
    min-height: 84vh;
  }
  @media screen and (min-width: 850px){
    background-size: 250px;
    h1 {
      font-size: 72px;
      line-height: 84px;
    }
    p {
      font-size: 32px;
      line-height: 36px;
    }
    button {
      padding: 1rem 4rem;
      font-size: 18px;
      line-height: 30px;
    }
  }
`

export default NotFound