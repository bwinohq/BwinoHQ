import styled from "styled-components";
import purple from "../assets/Purple-Card.svg";
import ImageDiv from "./LazyLoading";

const Card = () => {
  return (
    <CardDiv>
      <div>
          {/* <img src={purple} alt="" /> */}
          <ImageDiv
            style={{ width: "100%", color: "purple" }}
            placeholderImg="https://via.placeholder.com/400x200.png"
            src={purple}
          />
      </div>
      <div>
        <h3>Get early access</h3>
        <h2>Call Quiz: A new trivia with a bit of nostalgia</h2>
        <p>
          Call Quiz is a reimagination of the popular Nigerian pen & paper game,
          “I call on!”.{" "}
        </p>
        <p>
          Players call on a letter and select the right answer to 5 questions
          before the timer runs out. Call Quiz lets players enjoy both single
          and multiplayer modes.
        </p>
        <p>
          Get a sneak peak of Call Quiz before it is released globally.
          Subscribe below to get early access
        </p>
      </div>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  max-width: 954px;
  box-shadow: 0px 4.74306px 75.8889px rgba(12, 18, 32, 0.05);
  border-radius: 24px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  padding: 1rem;
  gap: 10px;

  img {
      width: 100%;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    color: #c5c5c5;
    text-align: center;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #080707;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #080707;
  }

  @media screen and (min-width: 1000px) {
    padding: 2rem;  
    grid-template-columns: repeat(2, 1fr);

    h3 {
        font-size: 18px;
        line-height: 30px;
        text-align: left;
    }
    h2 {
        font-size: 36px;
        text-align: left;
    }
    p {
        font-size: 18px;
        line-height: 30px;
    }
  }
`;

export default Card;
