import { useEffect, useState, memo } from "react";
import ReactCardFlip from "react-card-flip";
import { useDispatch, useSelector } from "react-redux";
import { getByUrl } from "../redux/action";
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

const PlanetCard = ({ index, name, filmUrls }) => {
  // TODO: her planet card'da aynı filmler görünüyor.
  const [isFlipped, setIsFlipped] = useState(false);
  const { data } = useSelector((state) => state.swapi);
  const dispatch = useDispatch();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      filmUrls.map((url) => dispatch(getByUrl(url)));
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && !films.includes(data?.title)) {
      setFilms((currentFilms) => [...currentFilms, data.title]);
    }
  }, [data]);

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
              src={require(`/public/planetImages/${index}.PNG`)}
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
          {films?.map((film) => (
            <div className="cardTitle"> {film}</div>
          ))}
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default memo(PlanetCard);
