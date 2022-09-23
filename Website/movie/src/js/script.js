require('dotenv').config();

// Getting ID elements

// Movie
let moviePoster = document.getElementById("now-playing-img");
let movieTitle = document.getElementById("title");
let movieDescription = document.getElementById("genre");
let movieRelease = document.getElementById("release-date");
let movieTime = document.getElementById("time");
let movieGenre = document.getElementById("genre");

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

// Maximum limit
const MAX_MOVIE_LIMIT = 20;
const MAX_TVSHOW_LIMIT = 20;
const MAX_NEW_RELEASE_LIMIT = 20;

// API path
const URL_PATH = "https://api.themoviedb.org/3";

//Get the API key from .env file
const TMDB_SECRET_API = process.env.SECRET_API;

// Get a list of now playing movies
function displayNowPlayingMovies() {
    let url = URL_PATH + "/movie/upcoming?api_key=" + TMDB_SECRET_API + "&language=en-US&page=1";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            movieData = data.results;
            displayMovieData();
        });
}

// Display now playing movies
function displayMovieData() {
    
    // Format the release date to MM/DD/YYYY
    let date = new Date(movieData[0].release_date);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    movieRelease.innerHTML = month + "/" + day + "/" + year;
    
    // Use the data more details from the first movie
    let movieId = movieData[0].id;
    let url = URL_PATH + "/movie/" + movieId + "?api_key=" + TMDB_SECRET_API + "&language=en-US";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            movieTime.innerHTML = data.runtime + " minutes";
            movieGenre.innerHTML = data.genres[0].name;
        });

    // Loop through the movie data
    for (let i = 0; i < MAX_MOVIE_LIMIT; i++) {
        // Get the movie title
        let title = movieData[i].title;
        // Get the movie genre
        let description = movieData[i].overview;
        // Get the movie release date
        let releaseDate = movieData[i].release_date;
        // Get the movie time
        let time = movieData[i].runtime;
        // Get the movie background image
        let backgroundImage = movieData[i].poster_path;

        // Display the movie data
        moviePoster.src = "https://image.tmdb.org/t/p/original" + backgroundImage;
        movieTitle.innerHTML = title;
        movieDescription.innerHTML = description;
        movieRelease.innerHTML = releaseDate;
        movieTime.innerHTML = time + " minutes";
    }
}

// Function to show more or less of the description
function displayText() {
    let ellipsis = document.getElementById("ellipsis");
    let moreText = document.getElementById("more");
    let displayButton = document.getElementById("toggle-button");

    if(ellipsis.classList.contains("hidden")) {
        ellipsis.classList.remove("hidden");
        moreText.classList.add("hidden");
        displayButton.innerHTML = "Read more";
    } else {
        ellipsis.classList.add("hidden");
        moreText.classList.remove("hidden");
        displayButton.innerHTML = "Read less";
    }
}

// Initialize script
function init() {
    displayNowPlayingMovies();
    //displayText();
}

init();
