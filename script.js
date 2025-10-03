


const  UNSPLASH_API_KEY = "A8eIoMWx1s-hgxz71ZYm6JHByb7G7TTFpPra_eQ1X0I";
const OPENWEATHER_API_KEY = "e90c2605bffee529038ea2322373e2a4";

const state = {
    currentTab: 'home',
    currentSlide: 0,
    savedTrips: JSON.parse(localStorage.getItem('savedTrips')) || []
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSlideshow();
    initSearchHandlers();
    initPopularDestinations();
    renderSavedTrips();
});

function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });
}

function switchTab(tab) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(`${tab}-tab`).classList.remove('hidden');

    state.currentTab = tab;

    if (tab === 'trips') {
        renderSavedTrips();
    }
}

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    setInterval(() => {
        slides[state.currentSlide].classList.remove('active');
        state.currentSlide = (state.currentSlide + 1) % slides.length;
        slides[state.currentSlide].classList.add('active');
    }, 5000);
}

function initSearchHandlers() {
    const homeSearchBtn = document.getElementById('home-search-btn');
    const homeSearchInput = document.getElementById('home-search');
    const exploreSearchBtn = document.getElementById('explore-search-btn');
    const exploreSearchInput = document.getElementById('explore-search');

    homeSearchBtn.addEventListener('click', () => {
        const destination = homeSearchInput.value.trim();
        if (destination) {
            switchTab('explore');
            searchDestination(destination);
        }
    });

    homeSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const destination = homeSearchInput.value.trim();
            if (destination) {
                switchTab('explore');
                searchDestination(destination);
            }
        }
    });

    exploreSearchBtn.addEventListener('click', () => {
        const destination = exploreSearchInput.value.trim();
        if (destination) {
            searchDestination(destination);
        }
    });

    exploreSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const destination = exploreSearchInput.value.trim();
            if (destination) {
                searchDestination(destination);
            }
        }
    });
}

function initPopularDestinations() {
    const destCards = document.querySelectorAll('.destination-card');
    destCards.forEach(card => {
        card.addEventListener('click', () => {
            const city = card.dataset.city;
            switchTab('explore');
            searchDestination(city);
        });
    });
}

async function searchDestination(destination) {
    showLoading();
    document.getElementById('explore-search').value = destination;

    try {
        const [photos, weather] = await Promise.all([
            fetchUnsplashPhotos(destination),
            fetchWeatherData(destination)
        ]);

        displayDestinationDetails(destination, photos, weather);
    } catch (error) {
        console.error('Error searching destination:', error);
        displayError('Unable to fetch destination details. Please try again.');
    } finally {
        hideLoading();
    }
}

async function fetchUnsplashPhotos(destination) {
    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${destination} india landmark&per_page=6&client_id=${UNSPLASH_API_KEY}`
    );

    if (!response.ok) {
        console.warn('Unsplash API error, using fallback images');
        return generateFallbackImages(destination);
    }

    const data = await response.json();
    return data.results.length > 0 ? data.results : generateFallbackImages(destination);
}

function generateFallbackImages(destination) {
    return [
        { urls: { regular: `https://source.unsplash.com/800x600/?${destination},india,1` }, alt_description: destination, user: { name: "Unknown", links: { html: "#" } } },
        { urls: { regular: `https://source.unsplash.com/800x600/?${destination},monument,2` }, alt_description: destination, user: { name: "Unknown", links: { html: "#" } } },
        { urls: { regular: `https://source.unsplash.com/800x600/?${destination},landmark,3` }, alt_description: destination, user: { name: "Unknown", links: { html: "#" } } },
        { urls: { regular: `https://source.unsplash.com/800x600/?${destination},tourism,4` }, alt_description: destination, user: { name: "Unknown", links: { html: "#" } } },
        { urls: { regular: `https://source.unsplash.com/800x600/?${destination},travel,5` }, alt_description: destination, user: { name: "Unknown", links: { html: "#" } } },
        { urls: { regular: `https://source.unsplash.com/800x600/?${destination},architecture,6` }, alt_description: destination, user: { name: "Unknown", links: { html: "#" } } }
    ];
}

async function fetchWeatherData(destination) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${destination},IN&units=metric&appid=${OPENWEATHER_API_KEY}`
    );

    if (!response.ok) {
        console.warn('Weather API error, using fallback data');
        return generateFallbackWeather(destination);
    }

    const data = await response.json();
    return data;
}

function generateFallbackWeather(destination) {
    const temps = [25, 28, 30, 27, 26];
    const conditions = ['Clear', 'Clouds', 'Rain', 'Clear', 'Clouds'];
    const today = new Date();

    return {
        list: temps.map((temp, i) => ({
            dt: today.getTime() / 1000 + (i * 86400),
            main: { temp, feels_like: temp + 2 },
            weather: [{ main: conditions[i], description: conditions[i].toLowerCase(), icon: '01d' }],
            wind: { speed: 3.5 }
        })),
        city: { name: destination }
    };
}

function displayDestinationDetails(destination, photos, weather) {
    const exploreResults = document.getElementById('explore-results');

    const currentWeather = weather.list[0];
    const forecast = weather.list.filter((item, index) => index % 8 === 0).slice(0, 5);

    const travelTips = {
        'Delhi': 'Visit during October to March for pleasant weather. Don\'t miss the street food at Chandni Chowk!',
        'Mumbai': 'Best time is November to February. Try the local vada pav and explore Marine Drive at sunset.',
        'Jaipur': 'October to March is ideal. Book a hot air balloon ride for stunning views of the Pink City.',
        'Goa': 'Visit November to February for beaches. March to May is hot, and June to October is monsoon.',
        'Kerala': 'September to March is perfect. Experience a houseboat stay in the backwaters of Alleppey.',
        'Ladakh': 'June to September only when roads are open. Acclimatize properly to avoid altitude sickness.',
        'Varanasi': 'October to March is comfortable. Witness the Ganga Aarti at Dashashwamedh Ghat at sunset.',
        'Manali': 'March to June for pleasant weather, December to February for snow. Book accommodations early.',
        'default': 'Research local customs and traditions. Stay hydrated and try authentic local cuisine.'
    };

    const bestTimes = {
        'Delhi': 'October to March',
        'Mumbai': 'November to February',
        'Jaipur': 'October to March',
        'Goa': 'November to February',
        'Kerala': 'September to March',
        'Ladakh': 'June to September',
        'Varanasi': 'October to March',
        'Manali': 'March to June (Summer) | December to February (Snow)',
        'default': 'Check seasonal weather patterns'
    };

    const tip = travelTips[destination] || travelTips.default;
    const bestTime = bestTimes[destination] || bestTimes.default;

    exploreResults.innerHTML = `
        <div class="destination-details">
            <div class="dest-header">
                <h2>${destination}</h2>
                <button class="save-trip-btn" onclick="saveTrip('${destination}', '${photos[0].urls.regular}')">
                    Save Trip
                </button>
            </div>

            <div class="weather-section">
                <h3>Current Weather</h3>
                <div class="current-weather">
                    <div class="weather-icon">${getWeatherIcon(currentWeather.weather[0].main)}</div>
                    <div class="weather-info">
                        <h3>${Math.round(currentWeather.main.temp)}°C</h3>
                        <p>${currentWeather.weather[0].description}</p>
                        <p>Feels like ${Math.round(currentWeather.main.feels_like)}°C</p>
                    </div>
                </div>

                <h3>5-Day Forecast</h3>
                <div class="forecast-grid">
                    ${forecast.map(day => `
                        <div class="forecast-item">
                            <h4>${new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
                            <div class="weather-icon">${getWeatherIcon(day.weather[0].main)}</div>
                            <p>${Math.round(day.main.temp)}°C</p>
                            <p>${day.weather[0].main}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="info-grid">
                <div class="info-card">
                    <h3>Travel Tip</h3>
                    <p>${tip}</p>
                </div>
                <div class="info-card">
                    <h3>Best Time to Visit</h3>
                    <p>${bestTime}</p>
                </div>
            </div>

            <div class="landmarks-section">
                <h3>Famous Landmarks & Places</h3>
                <div class="landmarks-grid">
                    ${photos.map(photo => `
                        <div class="landmark-card">
                            <img src="${photo.urls.regular}" alt="${photo.alt_description || 'Landmark in ' + destination}">
                            <div class="landmark-info">
                                <p class="place-name">
                                    ${photo.alt_description 
                                        ? photo.alt_description.charAt(0).toUpperCase() + photo.alt_description.slice(1) 
                                        : destination}
                                </p>
                                <p class="photo-credit">
                                    📸 <a href="${photo.user.links.html}" target="_blank">${photo.user.name}</a>
                                </p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function getWeatherIcon(condition) {
    const icons = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Drizzle': '🌦️',
        'Thunderstorm': '⛈️',
        'Snow': '❄️',
        'Mist': '🌫️',
        'Haze': '🌫️',
        'Fog': '🌫️'
    };
    return icons[condition] || '🌤️';
}

function saveTrip(destination, imageUrl) {
    const trip = {
        id: Date.now(),
        destination,
        imageUrl,
        savedAt: new Date().toISOString()
    };

    const existingTrip = state.savedTrips.find(t => t.destination === destination);
    if (existingTrip) {
        alert('This trip is already saved!');
        return;
    }

    state.savedTrips.push(trip);
    localStorage.setItem('savedTrips', JSON.stringify(state.savedTrips));
    alert(`${destination} has been saved to your trips!`);
}

function renderSavedTrips() {
    const savedTripsGrid = document.getElementById('saved-trips');

    if (state.savedTrips.length === 0) {
        savedTripsGrid.innerHTML = `
            <div class="empty-state">
                <h3>No saved trips yet</h3>
                <p>Start exploring destinations and save your favorite trips!</p>
            </div>
        `;
        return;
    }

    savedTripsGrid.innerHTML = state.savedTrips.map(trip => `
        <div class="trip-card">
            <div class="trip-image" style="background-image: url('${trip.imageUrl}')"></div>
            <div class="trip-info">
                <h3>${trip.destination}</h3>
                <button class="remove-btn" onclick="removeTrip(${trip.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function removeTrip(tripId) {
    state.savedTrips = state.savedTrips.filter(trip => trip.id !== tripId);
    localStorage.setItem('savedTrips', JSON.stringify(state.savedTrips));
    renderSavedTrips();
}

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function displayError(message) {
    const exploreResults = document.getElementById('explore-results');
    exploreResults.innerHTML = `
        <div class="empty-state">
            <h3>Oops!</h3>
            <p>${message}</p>
        </div>
    `;
}

