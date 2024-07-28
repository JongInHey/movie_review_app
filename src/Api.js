const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjg0MTY3NTVhMWRmZGE1NDU3YTE5OGVlNjk3MmNiZiIsIm5iZiI6MTcyMjE4MjQ0OS4yNDkyMzYsInN1YiI6IjY2OGY5NjQ5NTBhZGVmNjliN2Y2YzlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wbAIvQ4ZvIlMUKBOYExNdOq93Oya2ZfhBUXy8Mb5QR8",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

const detailUrl = (movie_id, urlName) => {
  return baseUrl + `movie/${movie_id}/${urlName}?language=ko-kr`;
};

const searchUrl = (urlName, keyword) => {
  return baseUrl + `search/${urlName}?query=${keyword}&language=ko-kr`;
};

export const movieList = () => {
  const genreList = baseUrl + "genre/movie/list?language=ko";
  return fetch(genreList, options).then((res) => res.json());
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (movie_id) =>
  fetch(url(`movie/${movie_id}`), options).then((res) => res.json());

export const recommendations = (movie_id) =>
  fetch(detailUrl(`${movie_id}`, "recommendations"), options).then((res) =>
    res.json()
  );

export const similar = (movie_id) =>
  fetch(detailUrl(`${movie_id}`, "similar"), options).then((res) => res.json());

export const Videos = (movie_id) =>
  fetch(detailUrl(`${movie_id}`, "videos"), options).then((res) => res.json());

export const searchMovie = (keyword) =>
  fetch(searchUrl("movie", `${keyword}`), options).then((res) => res.json());

export const searchPerson = (keyword) =>
  fetch(searchUrl("person", `${keyword}`), options).then((res) => res.json());
