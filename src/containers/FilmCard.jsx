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

const FilmCard = ({ title, episodeId, director, producer, releaseDate }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dateParts = releaseDate.split("-");
  const date = dateParts[2] + "." + dateParts[1] + "." + dateParts[0];
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
        <div>
          <div
            style={{
              textAlign: "center",
              marginTop: "10%",
            }}
          >
            <strong>{title}</strong>
            <h1 style={{ marginTop: "20%" }}>{episodeId}</h1>
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
          <div className="cardTitle">Director: {director}</div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Producer: {producer}
          </div>
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Release Date: {date}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default FilmCard;
