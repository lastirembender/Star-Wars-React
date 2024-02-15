import { createSlice } from "@reduxjs/toolkit";
import {
  getByUrl as getByUrlRequest,
  getAllFilms as getAllFilmsRequest,
  getFilmById as getFilmByIdRequest,
  getPlanetById as getPlanetByIdRequest,
  getAllPlanets as getAllPlanetsRequest,
  getAllPeople as getAllPeopleRequest,
  getPeopleById as getPeopleByIdRequest,
  getAllSpecies as getAllSpeciesRequest,
  getSpeciesById as getSpeciesByIdRequest,
  getAllStarships as getAllStarshipsRequest,
  getStarshipById as getStarshipByIdRequest,
} from "../../../api/swapi/swapiApi";

import { requestFetchingError } from "../globalSlice";

const swapiState = {
  data: undefined,
  allFilms: undefined,
  film: undefined,
  allPlanets: undefined,
  planet: undefined,
  allPeople: undefined,
  people: undefined,
  allSpecies: undefined,
  species: undefined,
  allStarships: undefined,
  starship: undefined,
  fetchingStateData: "none",
  fetchingStateAllFilms: "none",
  fetchingStateFilm: "none",
  fetchingStateAllPlanets: "none",
  fetchingStatePlanet: "none",
  fetchingStateAllPeople: "none",
  fetchingStatePeople: "none",
  fetchingStateAllSpecies: "none",
  fetchingStateSpecies: "none",
  fetchingStateAllStarships: "none",
  fetchingStateStarship: "none",
  error: null,
};

const swapi = createSlice({
  name: "swapi",
  initialState: swapiState,
  reducers: {
    getByUrlFetching: (state) => {
      state.fetchingStateData = "requesting";
    },
    getByUrlFetched: (state, { payload }) => {
      state.fetchingStateData = "success";
      state.data = payload;
    },
    getByUrlFetchingError: (state, action) => {
      state.fetchingStateData = "failed";
      state.error = action.payload;
    },
    getAllFilmsFetching: (state) => {
      state.fetchingStateAllFilms = "requesting";
    },
    getAllFilmsFetched: (state, { payload }) => {
      state.fetchingStateAllFilms = "success";
      state.allFilms = payload;
    },
    getAllFilmsFetchingError: (state, action) => {
      state.fetchingStateAllFilms = "failed";
      state.error = action.payload;
    },
    getFilmByIdFetching: (state) => {
      state.fetchingStateFilm = "requesting";
    },
    getFilmByIdFetched: (state, { payload }) => {
      state.fetchingStateFilm = "success";
      state.film = payload;
    },
    getFilmByIdFetchingError: (state, action) => {
      state.fetchingStateFilm = "failed";
      state.error = action.payload;
    },
    getAllPlanetsFetching: (state) => {
      state.fetchingStateAllPlanets = "requesting";
    },
    getAllPlanetsFetched: (state, { payload }) => {
      state.fetchingStateAllPlanets = "success";
      state.allPlanets = payload;
    },
    getAllPlanetsFetchingError: (state, action) => {
      state.fetchingStateAllPlanets = "failed";
      state.error = action.payload;
    },
    getPlanetByIdFetching: (state) => {
      state.fetchingStatePlanet = "requesting";
    },
    getPlanetByIdFetched: (state, { payload }) => {
      state.fetchingStatePlanet = "success";
      state.planet = payload;
    },
    getPlanetByIdFetchingError: (state, action) => {
      state.fetchingStatePlanet = "failed";
      state.error = action.payload;
    },
    getAllPeopleFetching: (state) => {
      state.fetchingStateAllPeople = "requesting";
    },
    getAllPeopleFetched: (state, { payload }) => {
      state.fetchingStateAllPeople = "success";
      state.allPeople = payload;
    },
    getAllPeopleFetchingError: (state, action) => {
      state.fetchingStateAllPeople = "failed";
      state.error = action.payload;
    },
    getPeopleByIdFetching: (state) => {
      state.fetchingStatePeople = "requesting";
    },
    getPeopleByIdFetched: (state, { payload }) => {
      state.fetchingStatePeople = "success";
      state.people = payload;
    },
    getPeopleByIdFetchingError: (state, action) => {
      state.fetchingStatePeople = "failed";
      state.error = action.payload;
    },
    getAllSpeciesFetching: (state) => {
      state.fetchingStateAllSpecies = "requesting";
    },
    getAllSpeciesFetched: (state, { payload }) => {
      state.fetchingStateAllSpecies = "success";
      state.allSpecies = payload;
    },
    getAllSpeciesFetchingError: (state, action) => {
      state.fetchingStateAllSpecies = "failed";
      state.error = action.payload;
    },
    getSpeciesByIdFetching: (state) => {
      state.fetchingStateSpecies = "requesting";
    },
    getSpeciesByIdFetched: (state, { payload }) => {
      state.fetchingStateSpecies = "success";
      state.species = payload;
    },
    getSpeciesByIdFetchingError: (state, action) => {
      state.fetchingStateSpecies = "failed";
      state.error = action.payload;
    },
    getAllStarshipsFetching: (state) => {
      state.fetchingStateAllStarships = "requesting";
    },
    getAllStarshipsFetched: (state, { payload }) => {
      state.fetchingStateAllStarships = "success";
      state.allStarships = payload;
    },
    getAllStarshipsFetchingError: (state, action) => {
      state.fetchingStateAllStarships = "failed";
      state.error = action.payload;
    },
    getStarshipByIdFetching: (state) => {
      state.fetchingStateStarship = "requesting";
    },
    getStarshipByIdFetched: (state, { payload }) => {
      state.fetchingStateStarship = "success";
      state.starship = payload;
    },
    getStarshipByIdFetchingError: (state, action) => {
      state.fetchingStateStarship = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getByUrlFetching,
  getByUrlFetched,
  getByUrlFetchingError,
  getAllFilmsFetching,
  getAllFilmsFetched,
  getAllFilmsFetchingError,
  getFilmByIdFetching,
  getFilmByIdFetched,
  getFilmByIdFetchingError,
  getAllPlanetsFetching,
  getAllPlanetsFetched,
  getAllPlanetsFetchingError,
  getPlanetByIdFetching,
  getPlanetByIdFetched,
  getPlanetByIdFetchingError,
  getAllPeopleFetching,
  getAllPeopleFetched,
  getAllPeopleFetchingError,
  getPeopleByIdFetching,
  getPeopleByIdFetched,
  getPeopleByIdFetchingError,
  getAllSpeciesFetching,
  getAllSpeciesFetched,
  getAllSpeciesFetchingError,
  getSpeciesByIdFetching,
  getSpeciesByIdFetched,
  getSpeciesByIdFetchingError,
  getAllStarshipsFetching,
  getAllStarshipsFetched,
  getAllStarshipsFetchingError,
  getStarshipByIdFetching,
  getStarshipByIdFetched,
  getStarshipByIdFetchingError,
} = swapi.actions;

export default swapi.reducer;

export const getByUrl = (url) => async (dispatch) => {
  try {
    dispatch(getByUrlFetching());
    const response = await getByUrlRequest(url);
    dispatch(getByUrlFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getByUrlFetchingError(err.toString()));
  }
};

export const getAllFilms = () => async (dispatch) => {
  try {
    dispatch(getAllFilmsFetching());
    const response = await getAllFilmsRequest();
    dispatch(getAllFilmsFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getAllFilmsFetchingError(err.toString()));
  }
};

export const getFilmById = (id) => async (dispatch) => {
  try {
    dispatch(getFilmByIdFetching());
    const response = await getFilmByIdRequest(id);
    dispatch(getFilmByIdFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getFilmByIdFetchingError(err.toString()));
  }
};

export const getAllPlanets = () => async (dispatch) => {
  try {
    dispatch(getAllPlanetsFetching());
    const response = await getAllPlanetsRequest();
    dispatch(getAllPlanetsFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getAllPlanetsFetchingError(err.toString()));
  }
};

export const getPlanetById = (id) => async (dispatch) => {
  try {
    dispatch(getPlanetByIdFetching());
    const response = await getPlanetByIdRequest(id);
    dispatch(getPlanetByIdFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getPlanetByIdFetchingError(err.toString()));
  }
};

export const getAllPeople = () => async (dispatch) => {
  try {
    dispatch(getAllPeopleFetching());
    const response = await getAllPeopleRequest();
    dispatch(getAllPeopleFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getAllPeopleFetchingError(err.toString()));
  }
};

export const getPeopleById = (id) => async (dispatch) => {
  try {
    dispatch(getPeopleByIdFetching());
    const response = await getPeopleByIdRequest(id);
    dispatch(getPeopleByIdFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getPeopleByIdFetchingError(err.toString()));
  }
};

export const getAllSpecies = () => async (dispatch) => {
  try {
    dispatch(getAllSpeciesFetching());
    const response = await getAllSpeciesRequest();
    dispatch(getAllSpeciesFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getAllSpeciesFetchingError(err.toString()));
  }
};

export const getSpeciesById = (id) => async (dispatch) => {
  try {
    dispatch(getSpeciesByIdFetching());
    const response = await getSpeciesByIdRequest(id);
    dispatch(getSpeciesByIdFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getSpeciesByIdFetchingError(err.toString()));
  }
};

export const getAllStarships = () => async (dispatch) => {
  try {
    dispatch(getAllStarshipsFetching());
    const response = await getAllStarshipsRequest();
    dispatch(getAllStarshipsFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getAllStarshipsFetchingError(err.toString()));
  }
};

export const getStarshipById = (id) => async (dispatch) => {
  try {
    dispatch(getStarshipByIdFetching());
    const response = await getStarshipByIdRequest(id);
    dispatch(getStarshipByIdFetched(response));
  } catch (err) {
    dispatch(requestFetchingError(err.toString()));
    dispatch(getStarshipByIdFetchingError(err.toString()));
  }
};
