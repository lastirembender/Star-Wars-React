import { swapiConfig } from "../apiConfigs";
import axios from "axios";

const swapiUrl = swapiConfig;

export async function getByUrl(url) {
  const data = await axios.get(url);
  return data.data;
}

export async function getAllFilms() {
  const url = `${swapiUrl}films/?page=1`;
  const data = await axios.get(url);
  return data.data;
}

export async function getFilmById(id) {
  const url = `${swapiUrl}films/${id}`;
  const data = await axios.get(url);
  return data.data;
}

export async function getAllPlanets() {
  const url = `${swapiUrl}planets/?page=1`;
  const data = await axios.get(url);
  return data.data;
}

export async function getPlanetById(id) {
  const url = `${swapiUrl}planets/${id}`;
  const data = await axios.get(url);
  return data.data;
}

export async function getAllPeople() {
  const url = `${swapiUrl}people/?page=1`;
  const data = await axios.get(url);
  return data.data;
}

export async function getPeopleById(id) {
  const url = `${swapiUrl}people/${id}`;
  const data = await axios.get(url);
  return data.data;
}

export async function getAllSpecies() {
  const url = `${swapiUrl}species/?page=1`;
  const data = await axios.get(url);
  return data.data;
}

export async function getSpeciesById(id) {
  const url = `${swapiUrl}species/${id}`;
  const data = await axios.get(url);
  return data.data;
}

export async function getAllStarships() {
  const url = `${swapiUrl}starships/?page=1`;
  const data = await axios.get(url);
  return data.data;
}

export async function getStarshipById(id) {
  const url = `${swapiUrl}starships/${id}`;
  const data = await axios.get(url);
  return data.data;
}
