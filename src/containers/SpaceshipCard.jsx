import { useState } from "react";
import ReactCardFlip from "react-card-flip";
const CardStyle = {
  border: "1px solid white",
  padding: "20px",
  marginLeft: "60px",
  marginTop: "30px",
  width: "250px",
  height: "280px",
  color: "white",
  alignContent: "center",
};

const SpaceshipCard = ({
  index,
  name,
  model,
  length,
  crew,
  passengers,
  starshipClass,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip
      className="characterCard"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div
        style={CardStyle}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          <strong>{name}</strong>
        </div>
      </div>
      <div
        style={CardStyle}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        {/* This is the back of the card. */}
        <div
          style={{
            height: "100%",
            flexDirection: "column",
            alignContent: "space-between",
          }}
        >
          <div className="cardTitle">Model: {model}</div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Length: {length}
          </div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Crew: {crew}
          </div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Passenger Capacity: {passengers}
          </div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Spaceship Class: {starshipClass}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default SpaceshipCard;
