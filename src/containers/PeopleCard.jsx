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
  display: "flex",
  alignContent: "center",
};

const PeopleCard = ({ index, name, eye_color, skin_color, birth_year }) => {
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
        <div style={{ marginLeft: "20%", marginTop: "10%" }}>
          <div
            style={{
              padding: "5px 10px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <strong>{name}</strong>
          </div>
          <div>
            <img
              src={require(`/public/characterIcons/${index}.png`)}
              alt="Character Icon"
              width="144"
              height="144"
            ></img>
          </div>
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
          <div className="cardTitle">Eye Color: {eye_color}</div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Birth Year: {birth_year}
          </div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Skin Color: {skin_color}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default PeopleCard;
