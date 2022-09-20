
// dotenv
require('dotenv').config();

// Getting ID elements

// Movie
//let movieBackgroundImage = document.getElementById("now-playing-img").src;
let movieTitle = document.getElementById("title");
let movieGenre = document.getElementById("genre");
let movieRelease = document.getElementById("release-date");
let movieTime = document.getElementById("time");

// TV Show
let tvBackgroundImage = document.getElementById("background-img");
let tvTitle = document.getElementById("tvshow-title");
let tvDescription = document.getElementById("tvshow-description");

// New Release
let movieReleaseBackgroundImage = document.getElementById("movie-release-background-image");
let movieReleaseTitle = document.getElementById("movie-release-title");
let movieReleaseGenre = document.getElementById("movie-release-genre");
let movieReleaseRelease = document.getElementById("movie-release-release-date");
let movieReleaseTime = document.getElementById("movie-release-time");

// Search Result
let searchBackgroundImage = document.getElementById("search-bg-img");
let searchResultTitle = document.getElementById("search-title");
let searchResultGenre = document.getElementById("search-description");
let searchBar = document.getElementById("search-bar");

// Get data from API
let tvShowData = [];
let movieData = [];
let newReleaseData = [];
let searchResultData = [];

// API path
const URL_PATH = "https://api.themoviedb.org/3";

//Get the API key from .env file
const API_KEY = process.env.SECRET_API;

// Getting the movie data from API
const getMovieData = async () => {
    const response = await fetch(`${URL_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    movieData = data.results;
    console.log(movieData);
}

// List the first 20 movies
const listMovieData = () => {
    let movieList = movieData.slice(0, 20);
    movieList.forEach((movie) => {
        document.getElementById("now-playing-img").src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieTitle.innerHTML = movie.title;
        movieGenre.innerHTML = movie.genre_ids;
        movieRelease.innerHTML = movie.release_date;
        movieTime.innerHTML = movie.runtime;
    });
}

// Getting the TV show data from API
const getTvShowData = async () => {
    const response = await fetch(`${URL_PATH}tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    tvShowData = data.results;
    console.log(tvShowData);
}

// List 15 popular TV shows
const listTvShowData = () => {
    let tvShowList = tvShowData.slice(0, 15);
    tvShowList.forEach((tvShow) => {
        tvBackgroundImage.src = `${URL_PATH}${tvShow.backdrop_path}`;
        tvTitle.innerHTML = tvShow.name;
        tvDescription.innerHTML = tvShow.overview;
    });
}

// Getting the new release data from API
const getNewReleaseData = async () => {
    const response = await fetch(`${URL_PATH}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    newReleaseData = data.results;
    console.log(newReleaseData);
}

// List the first 20 new releases
const listNewReleaseData = () => {
    let newReleaseList = newReleaseData.slice(0, 20);
    newReleaseList.forEach((newRelease) => {
        movieReleaseBackgroundImage.src = `${URL_PATH}${newRelease.backdrop_path}`;
        movieReleaseTitle.innerHTML = newRelease.title;
        movieReleaseGenre.innerHTML = newRelease.genre_ids;
        movieReleaseRelease.innerHTML = newRelease.release_date;
        movieReleaseTime.innerHTML = newRelease.runtime;
    });
}

// Getting the search result data from API
const getSearchResultData = async () => {
    const response = await fetch(`${URL_PATH}search/movie?api_key=${API_KEY}&language=en-US&query=${searchBar.value}&page=1&include_adult=false`);
    const data = await response.json();
    searchResultData = data.results;
    console.log(searchResultData);
}

// List the first 20 search results
const listSearchResultData = () => {
    let searchResultList = searchResultData.slice(0, 20);
    searchResultList.forEach((searchResult) => {
        searchBackgroundImage.src = `${URL_PATH}${searchResult.backdrop_path}`;
        searchResultTitle.innerHTML = searchResult.title;
        searchResultGenre.innerHTML = searchResult.genre_ids;
    });
}

// Display movie data
function displayMovieData() {
    getMovieData()
        .then(() => {
            listMovieData();
        });
}

// Search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    getSearchResultData();
    listSearchResultData();
});

// Initialize the functions
function init() {
    displayMovieData();
    getTvShowData();
    listTvShowData();
    getNewReleaseData();
    listNewReleaseData();
}

init();