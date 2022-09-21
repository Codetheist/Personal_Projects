
// dotenv
require('dotenv').config();

// Getting ID elements

// Movie
let movieBackgroundImage = document.getElementById("now-playing-img");
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

// Get a list of now playing movies
const getNowPlayingMovies = async () => {
    const response = await fetch(
        `${URL_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data;
};

// Display now playing movies
const displayNowPlayingMovies = async () => {
    const data = await getNowPlayingMovies();
    movieData = data.results;
    movieBackgroundImage.src = `url(https://image.tmdb.org/t/p/original${movieData[0].backdrop_path})`;
    movieTitle.innerHTML = movieData[0].title;
    movieGenre.innerHTML = movieData[0].genre_ids;
    movieRelease.innerHTML = movieData[0].release_date;
    movieTime.innerHTML = movieData[0].runtime;
};

displayNowPlayingMovies();

