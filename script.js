
// =====================================
// 1. MOVIE DATA
// =====================================

const movies = [
    {
        id: 1,
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.7,
        duration: "2h 49m",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars."
    },
    {
        id: 2,
        title: "Inception",
        genre: "Action",
        year: 2010,
        rating: 8.8,
        duration: "2h 28m",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "A skilled thief who steals secrets through dreams gets a chance to erase his past by planting an idea in someone's mind."
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        duration: "2h 32m",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces the Joker, a criminal mastermind who wants to bring chaos to Gotham City."
    },
    {
        id: 4,
        title: "Avatar",
        genre: "Adventure",
        year: 2009,
        rating: 7.9,
        duration: "2h 42m",
        image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        description: "A marine travels to the beautiful world of Pandora and becomes involved in a conflict between humans and its inhabitants."
    },
    {
        id: 5,
        title: "Titanic",
        genre: "Romance",
        year: 1997,
        rating: 7.9,
        duration: "3h 14m",
        image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        description: "A young couple from different social backgrounds fall in love aboard the legendary Titanic."
    },
    {
        id: 6,
        title: "Joker",
        genre: "Thriller",
        year: 2019,
        rating: 8.4,
        duration: "2h 2m",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "A troubled comedian struggles with rejection and gradually transforms into a symbol of chaos."
    },
    {
        id: 7,
        title: "The Avengers",
        genre: "Action",
        year: 2012,
        rating: 8.0,
        duration: "2h 23m",
        image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        description: "Earth's mightiest heroes join forces to protect the planet from a dangerous alien threat."
    },
    {
        id: 8,
        title: "Frozen",
        genre: "Animation",
        year: 2013,
        rating: 7.4,
        duration: "1h 42m",
        image: "https://image.tmdb.org/t/p/w500/m4uhSpErBKX6X7y37x3MJq7q6B8.jpg",
        description: "A fearless young woman sets out on an adventure to find her sister and save their kingdom."
    },
    {
        id: 9,
        title: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        rating: 8.7,
        duration: "2h 16m",
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A computer hacker discovers that reality is not what it seems and joins a fight against powerful machines."
    },
    {
        id: 10,
        title: "La La Land",
        genre: "Romance",
        year: 2016,
        rating: 8.0,
        duration: "2h 8m",
        image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        description: "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles."
    },
    {
        id: 11,
        title: "The Lion King",
        genre: "Adventure",
        year: 1994,
        rating: 8.5,
        duration: "1h 28m",
        image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        description: "A young lion prince must find his courage and reclaim his rightful place as king."
    },
    {
        id: 12,
        title: "The Shawshank Redemption",
        genre: "Drama",
        year: 1994,
        rating: 9.3,
        duration: "2h 22m",
        image: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        description: "Two imprisoned men build an unexpected friendship while holding on to hope for a better future."
    }
];


// =====================================
// 2. GET HTML ELEMENTS
// =====================================

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const genreFilter = document.getElementById("genreFilter");
const sortFilter = document.getElementById("sortFilter");

const movieCount = document.getElementById("movieCount");
const resultsTitle = document.getElementById("resultsTitle");

const noResults = document.getElementById("noResults");
const resetBtn = document.getElementById("resetBtn");

const watchlistGrid = document.getElementById("watchlistGrid");
const emptyWatchlist = document.getElementById("emptyWatchlist");

const movieModal = document.getElementById("movieModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalWatchlistBtn = document.getElementById("modalWatchlistBtn");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// =====================================
// 3. WATCHLIST USING LOCAL STORAGE
// =====================================

let watchlist = [];

try {
    const savedWatchlist = JSON.parse(
        localStorage.getItem("cineverseWatchlist")
    );

    if (Array.isArray(savedWatchlist)) {
        watchlist = savedWatchlist.filter(id =>
            movies.some(movie => movie.id === id)
        );
    }
} catch (error) {
    watchlist = [];
}

function saveWatchlist() {
    localStorage.setItem(
        "cineverseWatchlist",
        JSON.stringify(watchlist)
    );
}


// =====================================
// 4. DISPLAY MOVIE CARDS
// =====================================

function displayMovies(movieList, container) {

    container.innerHTML = "";

    movieList.forEach(movie => {

        const isSaved = watchlist.includes(movie.id);

        const movieCard = document.createElement("div");

        movieCard.className = "movie-card";

        movieCard.innerHTML = `
            <div class="poster-container">

                <img
                    src="${movie.image}"
                    alt="${movie.title} poster"
                    class="movie-poster"
                    loading="lazy"
                >

                <span class="rating">
                    ⭐ ${movie.rating}
                </span>

                <button
                    class="save-btn ${isSaved ? "saved" : ""}"
                    data-action="save"
                    data-id="${movie.id}"
                    aria-label="Toggle watchlist for ${movie.title}"
                    aria-pressed="${isSaved}"
                    title="Add to Watchlist"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>

            <div class="movie-details">

                <h3>${movie.title}</h3>

                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="genre-tag">${movie.genre}</span>
                </div>

                <button
                    class="details-btn"
                    data-action="details"
                    data-id="${movie.id}"
                >
                    View Details
                </button>

            </div>
        `;

        container.appendChild(movieCard);

    });

}


// =====================================
// 5. SEARCH AND FILTER MOVIES
// =====================================

function searchMovies() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const selectedGenre = genreFilter.value;
    const selectedSort = sortFilter.value;

    let filteredMovies = movies.filter(movie => {

        const matchesName = movie.title
            .toLowerCase()
            .includes(searchText);

        const matchesGenre =
            selectedGenre === "All" ||
            movie.genre === selectedGenre;

        return matchesName && matchesGenre;

    });


    // Sorting functionality

    if (selectedSort === "rating") {

        filteredMovies.sort((a, b) =>
            b.rating - a.rating
        );

    }

    else if (selectedSort === "year") {

        filteredMovies.sort((a, b) =>
            b.year - a.year
        );

    }

    else if (selectedSort === "title") {

        filteredMovies.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    }


    // Display results

    displayMovies(filteredMovies, movieGrid);

    movieCount.textContent =
        `${filteredMovies.length} movies`;

    noResults.hidden = filteredMovies.length !== 0;

    movieGrid.style.display =
        filteredMovies.length === 0 ? "none" : "grid";

    if (searchText) {
        resultsTitle.textContent = "Search Results";
    }

    else if (selectedGenre !== "All") {
        resultsTitle.textContent = selectedGenre + " Movies";
    }

    else {
        resultsTitle.textContent = "All Movies";
    }

}


// =====================================
// 6. ADD OR REMOVE WATCHLIST
// =====================================

function toggleWatchlist(id) {

    if (watchlist.includes(id)) {

        watchlist = watchlist.filter(
            movieId => movieId !== id
        );

    }

    else {

        watchlist.push(id);

    }

    saveWatchlist();

    searchMovies();

    displayWatchlist();

    // Update modal button if open

    if (currentMovieId === id) {
        updateModalButton();
    }

}


// =====================================
// 7. DISPLAY WATCHLIST
// =====================================

function displayWatchlist() {

    const savedMovies = movies.filter(movie =>
        watchlist.includes(movie.id)
    );

    displayMovies(savedMovies, watchlistGrid);

    emptyWatchlist.hidden = savedMovies.length !== 0;

}


// =====================================
// 8. MOVIE DETAILS POPUP
// =====================================

let currentMovieId = null;

function showMovieDetails(id) {

    const movie = movies.find(movie =>
        movie.id === id
    );

    if (!movie) return;

    currentMovieId = id;

    modalImage.src = movie.image;
    modalImage.alt = movie.title + " poster";

    modalTitle.textContent = movie.title;

    modalMeta.textContent =
        `⭐ ${movie.rating}  |  ${movie.year}  |  ${movie.genre}  |  ${movie.duration}`;

    modalDescription.textContent = movie.description;

    updateModalButton();

    movieModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function updateModalButton() {

    const isSaved = watchlist.includes(currentMovieId);

    modalWatchlistBtn.textContent = isSaved
        ? "♥ Remove from Watchlist"
        : "♡ Add to Watchlist";

}


function hideMovieDetails() {

    movieModal.classList.remove("active");

    document.body.style.overflow = "";

    currentMovieId = null;

}


// =====================================
// 9. BUTTON EVENTS
// =====================================

// Search button

searchBtn.addEventListener("click", searchMovies);


// Search while typing

searchInput.addEventListener("input", searchMovies);


// Filter by genre

genreFilter.addEventListener("change", searchMovies);


// Sort movies

sortFilter.addEventListener("change", searchMovies);


// Reset search

resetBtn.addEventListener("click", () => {

    searchInput.value = "";
    genreFilter.value = "All";
    sortFilter.value = "default";

    searchMovies();

});


// =====================================
// 10. MOVIE CARD CLICK EVENTS
// =====================================

// Event delegation works for dynamically
// created movie cards.

function handleMovieCardClick(event) {

    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);

    if (button.dataset.action === "save") {

        toggleWatchlist(id);

    }

    else if (button.dataset.action === "details") {

        showMovieDetails(id);

    }

}

movieGrid.addEventListener("click", handleMovieCardClick);

watchlistGrid.addEventListener("click", handleMovieCardClick);


// =====================================
// 11. MODAL EVENTS
// =====================================

closeModal.addEventListener("click", hideMovieDetails);


// Close popup by clicking outside

movieModal.addEventListener("click", event => {

    if (event.target === movieModal) {
        hideMovieDetails();
    }

});


// Close popup using Escape key

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        hideMovieDetails();
    }

});


// Modal watchlist button

modalWatchlistBtn.addEventListener("click", () => {

    if (currentMovieId !== null) {
        toggleWatchlist(currentMovieId);
    }

});


// =====================================
// 12. MOBILE NAVBAR
// =====================================

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile navbar after clicking a link

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =====================================
// 13. INITIALIZE WEBSITE
// =====================================

searchMovies();

displayWatchlist();
