import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice();
  };
  return (
    <div className="card">
      <div>
        <img src={card.src} className="front" alt="card front" />
        <img
          onClick={handleClick}
          src="/img/cover.png"
          className="back"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
