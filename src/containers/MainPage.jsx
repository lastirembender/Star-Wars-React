import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getByUrl,
  getAllFilms,
  getFilmById,
  getAllPeople,
  getPeopleById,
  getAllPlanets,
  getPlanetById,
  getAllSpecies,
  getSpeciesById,
  getAllStarships,
  getStarshipById,
} from "../redux/action";
import CCard from "../components/CCard";
import { Button } from "react-bootstrap";
import PeopleCard from "./PeopleCard";
import FilmCard from "./FilmCard";
import PlanetCard from "./PlanetCard";
import SpaceshipCard from "./SpaceshipCard";

const MainPage = () => {
  const [clicked, setClicked] = useState(undefined);
  const { allPeople, allPlanets, allFilms, allStarships } = useSelector(
    (state) => state.swapi
  );
  const dispatch = useDispatch();

  const handleClickPeople = async () => {
    setClicked("people");
    dispatch(getAllPeople());
  };

  const handleClickFilms = () => {
    setClicked("films");
    dispatch(getAllFilms());
  };

  const handleClickPlanets = () => {
    setClicked("planets");
    dispatch(getAllPlanets());
  };

  const handleClickSpaceships = () => {
    setClicked("spaceships");
    dispatch(getAllStarships());
  };

  return (
    <div className="content-wrapper" id="mainPage">
      <div
        style={{
          fontFamily: "Star Jedi",
          color: "#ffe81f",
          textAlign: "center",
          fontSize: "60px",
        }}
      >
        <span>STAR WARS</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="sw" onClick={handleClickPeople}>
          People
        </Button>
        <Button variant="sw" onClick={handleClickPlanets}>
          Planets
        </Button>
        <Button variant="sw" onClick={handleClickSpaceships}>
          Spaceships
        </Button>
        <Button variant="sw" onClick={handleClickFilms}>
          Films
        </Button>
      </div>

      <CCard
        id="pageCard"
        cardStyle={{ height: "80vh", margin: "20px" }}
        cardBodyStyle={{ padding: "0" }}
      >
        {clicked && (
          <div className="cardContainer">
            {clicked === "people" &&
              allPeople?.results.map((people, index) => (
                <PeopleCard
                  index={index + 1}
                  name={people.name}
                  eye_color={people.eye_color}
                  skin_color={people.skin_color}
                  birth_year={people.birth_year}
                ></PeopleCard>
              ))}
            {clicked === "films" &&
              allFilms?.results.map((film, index) => (
                <FilmCard
                  index={index + 1}
                  title={film.title}
                  director={film.director}
                  episodeId={film.episode_id}
                  producer={film.producer}
                  releaseDate={film.release_date}
                ></FilmCard>
              ))}
            {clicked === "planets" &&
              allPlanets?.results.map((planet, index) => (
                <PlanetCard
                  index={index + 1}
                  name={planet.name}
                  filmUrls={planet.films}
                ></PlanetCard>
              ))}
            {clicked === "spaceships" &&
              allStarships?.results.map((starship, index) => (
                <SpaceshipCard
                  index={index + 1}
                  name={starship.name}
                  model={starship.model}
                  length={starship.length}
                  crew={starship.crew}
                  passengers={starship.passengers}
                  starshipClass={starship.starship_class}
                ></SpaceshipCard>
              ))}
          </div>
        )}
      </CCard>
    </div>
  );
};

export default MainPage;
