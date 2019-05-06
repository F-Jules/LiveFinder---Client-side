import axios from "axios";

const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    console.log("API ERROR", err.response.data);
  } else {
    console.log("React Code Error", err);
  }
  alert("ERROR ! SOMETHING WENT WRONG !");
  throw err;
}

export function postTokenLogin(tokenObject) {
  return backendApi.post("/auth/token-login", tokenObject).catch(errorHandler);
}

export function getLogOut() {
  return backendApi.get("/logout").catch(errorHandler);
}

export function getTopArtist() {
  return backendApi.get("/userInfo").catch(errorHandler);
}

export function getTopFrench() {
  return backendApi.get("/top-french").catch(errorHandler);
}

export function getTopArtistsList() {
  return backendApi.get("/top-artists-list").catch(errorHandler);
}

export function getRelatedConcerts() {
  return backendApi.get("/similar-artist").catch(errorHandler);
}

export function concertInfo(concertId) {
  return backendApi.get(`/concert-info/${concertId}`).catch(errorHandler);
}

export function addConcert(concertId) {
  return backendApi.post(`/concert-info/${concertId}`).catch(errorHandler);
}

export function genericInfos() {
  return backendApi.get("/generic").catch(errorHandler);
}

export function nextConcertsParis() {
  return backendApi.get("/concerts-paris").catch(errorHandler);
}

export function getArtistInfos() {
  return backendApi.get(`/artist`).catch(errorHandler);
}
export function getTest() {
  return backendApi.get("/test").catch(errorHandler);
}
export function spotiPlayer() {
  return backendApi.get("/spotiPlayer").catch(errorHandler);
}

export function userDashboard() {
  return backendApi.get("/dashboard-info").catch(errorHandler);
}

export function deleteConcert(concertId) {
  return backendApi.delete(`/delete-concert/${concertId}`).catch(errorHandler);
}

export function getTopPlaylist() {
  return backendApi.get("/get-top-playlist").catch(errorHandler);
}
