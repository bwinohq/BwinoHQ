import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const EarlyAccess = () => {
    const [email, setEmail] = useState('');

    const subscribe = (event:any) => {
        setEmail(event.target.value);
        var url = "https://script.google.com/a/macros/bwinohq.com/s/AKfycbwZVeERj7y9y2-kYodU71qDfG491PHQrClQWWDqev4lV7BrDvYCmn8x3c1J-he2iHOF-w/exec";
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        // request successful
        request.onload = function() {
        //    console.log(request.responseText);
            toast.success("Subscribed!", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        };
        setEmail('')
     
        // request failed
        request.onerror = function() {
           console.log("request failed")
           toast.error("Unable to subscribe at this time", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        };

        request.send(new FormData(event.target));
        event.preventDefault();
     }

  return (
    <Layout backgroundColor="#FCFBFB">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Home>
          <h1>
            Join the <span>fun</span>!
          </h1>
          <h4>
            A <span>world</span> of digital and interactive entertainment awaits <span>you</span>
          </h4>
          <div className="card">
            <Card />
          </div>
          <form
            className="input"
            onSubmit={subscribe}
          >
            <input
              type="email"
              name="Email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="terms">
            <p>
              By clicking on “Subscribe” you agree to our{" "}
              <Link to="/terms-of-service">Terms of Service</Link> and{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
        </Home>
      </motion.div>
    </Layout>
  );
};

const Home = styled.div`
  background-image: url("/images/Brown-Teddy.svg"),
    url("/images/White-Teddy.svg");
  background-size: 150px;
  background-position: bottom left, bottom right;
  background-repeat: no-repeat, no-repeat;

  display: grid;
  justify-items: center;
  padding: 1rem;

  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 44px;
    color: #080707;
    text-align: center;
    margin-top: 100px;
    margin-bottom: -12px;
  }
  h4 {
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
  }
  span {
    color: #e96d16;
    font-weight: 600;
  }

  .input {
    margin-top: 5rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 0.4rem;
    & input {
      background: #ffffff;
      box-shadow: 0px 2.5px 40px rgba(12, 18, 32, 0.05);
      border-radius: 8px;
      border: none;
      padding: 0.7rem 1.5rem;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
    input::placeholder {
      color: #c5c5c5;
    }
    & button {
      /* padding: 0.7rem; */
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      background: #080707;
      box-shadow: 0px 2.5px 40px rgba(12, 18, 32, 0.05);
      border-radius: 8px;
      border: 1px solid #080707;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        background-color: #080707;
        color: #e96d16;
      }
    }
  }

  .terms {
    color: #080707;
    font-weight: 400;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 200px;

    & a {
      color: #e96d16;
    }
  }

  @media screen and (max-width: 400px) {
    background-size: 100px;

    .terms {
      margin-bottom: 100px;
    }
  }

  @media screen and (min-width: 850px) {
    padding: 1rem 5rem;
    background-size: 250px;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    .input {
      & input {
        width: 240px;
        height: 40px;
      }
      & button {
        width: 150px;
        height: 62px;
      }
    }
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 72px;
      line-height: 84px;
      margin-top: 130px;
    }
    h4 {
      font-size: 32px;
    }
    .terms {
      font-size: 18px;
      margin-bottom: 150px;
    }
    .input {
      gap: 1rem;
      & input {
        width: 280px;
        height: 50px;
        font-size: 18px;
        line-height: 30px;
        padding: 0.7rem 2rem;
      }
      & button {
        width: 180px;
        height: 72px;
        font-size: 18px;
        line-height: 30px;
        right: 300px;
      }
    }
  }
`;

export default EarlyAccess;
