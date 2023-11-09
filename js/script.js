
const filterBtn = document.getElementById('filter-button');
const searchBtn = document.getElementById('search-button');
const platformSelect = document.getElementById('platform-select');
const genreSelect = document.getElementById('genre-select');
const sortButton = document.getElementById('sort-button');
const container = document.getElementById('games-container');
window.currentGames = [];


filterBtn.addEventListener('click', filterGames);
searchBtn.addEventListener('click', filterGames);
sortButton.addEventListener('click', sortGames);

async function fetchGames(queryParams = {}) {
    const baseUrl = 'https://www.freetogame.com/api/games';
    const query = new URLSearchParams(queryParams).toString();
    const proxyUrl = 'https://corsproxy.io/?';
    const urlWithProxy = proxyUrl + encodeURIComponent(`${baseUrl}?${query}`);
  
    try {
      const response = await fetch(urlWithProxy);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Could not fetch games:', error);
      renderErrorMessage(`Could not fetch games: ${error.message}`)
      return [];
    }
  }

  function renderErrorMessage(content) {
    container.innerHTML = '';
    const renderError = document.createElement('div');
    renderError.className = 'no-games-error';
    renderError.innerHTML = `<p>${content}</p>`;
    container.appendChild(renderError);

  }
  function renderGames(games) {
   
    container.innerHTML = ''; 
 

  if (games.length > 0) {
    games.forEach(game => {
      const gameElement = document.createElement('div');
      gameElement.innerHTML = `
        <h3>${game.title}</h3>
        <img src="${game.thumbnail}" alt="${game.title}">
        <p>${game.short_description}</p>
        <a href="${game.game_url}" target="_blank">Spela nu</a>
      `;
      container.appendChild(gameElement);
    });
  } else {

   renderErrorMessage('No games found :(');

  }
}

function sortGames () {
    

    if (!window.currentGames || window.currentGames.length === 0) {
        renderErrorMessage('No games to sort');
        return;
    }
    const sortedGames = window.currentGames.slice().sort((a, b) => a.title.localeCompare(b.title));
    renderGames(sortedGames);
  }

async function filterGames () {
    const searchInput = document.getElementById('search-field');
    const searchText = searchInput.value.trim().toLowerCase();
    const platformValue = document.getElementById('platform-select').value.toLowerCase();
    const genreValue = document.getElementById('genre-select').value.toLowerCase();
    if (!window.allGames) {
        window.allGames = await fetchGames();
    }
    let filteredGames = window.allGames;
    if (searchText || platformValue !== 'all' || genreValue !== 'all') {
         filteredGames = filteredGames.filter(game => {
            const matchesSearchText = !searchText || game.title.toLowerCase().includes(searchText)
            || game.genre.toLowerCase().includes(searchText);
            const matchesPlatform = platformValue === 'all' || game.platform.toLowerCase().includes(platformValue);
            const matchesGenre = genreValue === 'all' || game.genre.toLowerCase().includes(genreValue);

            return matchesSearchText && matchesPlatform && matchesGenre;

        });
        window.currentGames = filteredGames;
        renderGames(window.currentGames);
        searchInput.value = '';
    } else {

        searchInput.classList.add('red-placeholder');
        searchInput.placeholder = 'Please enter something...';
        setTimeout(() => {
                     searchInput.classList.remove('red-placeholder');
                     searchInput.placeholder = 'Search for games...';
                     searchInput.value = '';
                     }, 3000);
        
         }

     }

