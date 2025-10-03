// const UNSPLASH_ACCESS_KEY = "A8eIoMWx1s-hgxz71ZYm6JHByb7G7TTFpPra_eQ1X0I";
// const OPENWEATHER_API_KEY = "e90c2605bffee529038ea2322373e2a4";

// // Test fetch
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=${OPENWEATHER_API_KEY}`)
//   .then(res => res.json())
//   .then(data => console.log("Weather JSON:", data))
//   .catch(err => console.error("Fetch error:", err));



// const cityInput = document.getElementById('cityInput');
// const searchBtn = document.getElementById('searchBtn');
// const exploreInput = document.getElementById('exploreInput');
// const exploreBtn = document.getElementById('exploreBtn');
// const loading = document.getElementById('loading');
// const error = document.getElementById('error');
// const results = document.getElementById('results');
// const destinationName = document.getElementById('destinationName');
// const photoGallery = document.getElementById('photoGallery');
// const weatherInfo = document.getElementById('weatherInfo');
// const bestTime = document.getElementById('bestTime');
// const travelTip = document.getElementById('travelTip');
// const famousPlaces = document.getElementById('famousPlaces');
// const savedTrips = document.getElementById('savedTrips');

// let myTrips = JSON.parse(localStorage.getItem('myTrips')) || [];

// const destinationData = {
//   'paris': {
//     places: [
//       { name: 'Eiffel Tower', description: 'Iconic iron lattice tower and symbol of France' },
//       { name: 'Louvre Museum', description: 'World\'s largest art museum with the Mona Lisa' },
//       { name: 'Notre-Dame Cathedral', description: 'Medieval Catholic cathedral with Gothic architecture' },
//       { name: 'Arc de Triomphe', description: 'Monumental arch honoring those who fought for France' }
//     ],
//     bestTime: 'April to June and September to October offer pleasant weather and fewer crowds.',
//     tip: 'Purchase a Paris Museum Pass to skip lines at major attractions and save money.'
//   },
//   'london': {
//     places: [
//       { name: 'Big Ben', description: 'Iconic clock tower at Westminster Palace' },
//       { name: 'Tower of London', description: 'Historic castle and home to the Crown Jewels' },
//       { name: 'British Museum', description: 'World-famous museum with vast historical collections' },
//       { name: 'Buckingham Palace', description: 'Official residence of the British monarch' }
//     ],
//     bestTime: 'Late spring (May-June) and early fall (September-October) for mild weather.',
//     tip: 'Use an Oyster Card or contactless payment for convenient and cheaper public transport.'
//   },
//   'tokyo': {
//     places: [
//       { name: 'Senso-ji Temple', description: 'Ancient Buddhist temple in Asakusa district' },
//       { name: 'Tokyo Skytree', description: 'Tallest structure in Japan with panoramic views' },
//       { name: 'Shibuya Crossing', description: 'World\'s busiest pedestrian crossing' },
//       { name: 'Meiji Shrine', description: 'Peaceful Shinto shrine surrounded by forest' }
//     ],
//     bestTime: 'March to May (cherry blossom season) or October to November (fall colors).',
//     tip: 'Get a JR Pass for unlimited train travel and arrive early to popular attractions.'
//   },
//   'new york': {
//     places: [
//       { name: 'Statue of Liberty', description: 'Iconic symbol of freedom and democracy' },
//       { name: 'Central Park', description: 'Massive urban park in the heart of Manhattan' },
//       { name: 'Empire State Building', description: 'Art Deco skyscraper with observation decks' },
//       { name: 'Times Square', description: 'Vibrant commercial intersection and entertainment hub' }
//     ],
//     bestTime: 'April to June and September to November for comfortable weather and events.',
//     tip: 'Buy attraction tickets online in advance and use the subway for quick city travel.'
//   },
//   'rome': {
//     places: [
//       { name: 'Colosseum', description: 'Ancient amphitheater and iconic Roman landmark' },
//       { name: 'Vatican City', description: 'Home to St. Peter\'s Basilica and Sistine Chapel' },
//       { name: 'Trevi Fountain', description: 'Baroque fountain where wishes are made' },
//       { name: 'Roman Forum', description: 'Ancient ruins of the heart of Roman civilization' }
//     ],
//     bestTime: 'April to June and September to October for pleasant weather.',
//     tip: 'Book Vatican tickets online to avoid long queues and visit early in the morning.'
//   },
//   'barcelona': {
//     places: [
//       { name: 'Sagrada Familia', description: 'Gaudi\'s unfinished basilica masterpiece' },
//       { name: 'Park Güell', description: 'Colorful park with mosaic sculptures by Gaudi' },
//       { name: 'La Rambla', description: 'Famous tree-lined pedestrian street' },
//       { name: 'Gothic Quarter', description: 'Medieval neighborhood with narrow streets' }
//     ],
//     bestTime: 'May to June and September to October for warm, pleasant weather.',
//     tip: 'Book Sagrada Familia tickets weeks in advance and explore neighborhoods on foot.'
//   },
//   'dubai': {
//     places: [
//       { name: 'Burj Khalifa', description: 'World\'s tallest building with stunning views' },
//       { name: 'Dubai Mall', description: 'One of the world\'s largest shopping centers' },
//       { name: 'Palm Jumeirah', description: 'Artificial island shaped like a palm tree' },
//       { name: 'Dubai Marina', description: 'Modern waterfront with skyscrapers and dining' }
//     ],
//     bestTime: 'November to March when temperatures are cooler and more comfortable.',
//     tip: 'Dress modestly when visiting religious sites and book desert safari tours in advance.'
//   },
//   'sydney': {
//     places: [
//       { name: 'Sydney Opera House', description: 'Iconic performing arts center with unique design' },
//       { name: 'Sydney Harbour Bridge', description: 'Famous bridge with BridgeClimb experience' },
//       { name: 'Bondi Beach', description: 'World-famous beach for surfing and relaxation' },
//       { name: 'Taronga Zoo', description: 'Zoo with harbor views and native Australian animals' }
//     ],
//     bestTime: 'September to November and March to May for mild weather.',
//     tip: 'Take the ferry to Manly Beach for scenic harbor views and bring sunscreen year-round.'
//   }
// };

// document.querySelectorAll('.nav-tab').forEach(tab => {
//   tab.addEventListener('click', () => {
//     const tabName = tab.getAttribute('data-tab');
//     switchTab(tabName);
//   });
// });

// searchBtn.addEventListener('click', handleSearch);
// cityInput.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     handleSearch();
//   }
// });

// exploreBtn.addEventListener('click', handleExplore);
// exploreInput.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     handleExplore();
//   }
// });

// document.querySelectorAll('.destination-item').forEach(item => {
//   item.addEventListener('click', () => {
//     const city = item.getAttribute('data-city');
//     cityInput.value = city;
//     handleSearch();
//   });
// });

// function switchTab(tabName) {
//   document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
//   document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

//   document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

//   if (tabName === 'home') {
//     document.getElementById('homeTab').classList.add('active');
//   } else if (tabName === 'explore') {
//     document.getElementById('exploreTab').classList.add('active');
//   } else if (tabName === 'my-trips') {
//     document.getElementById('myTripsTab').classList.add('active');
//     displaySavedTrips();
//   }
// }

// function handleExplore() {
//   const city = exploreInput.value.trim();
//   if (!city) {
//     return;
//   }
//   cityInput.value = city;
//   switchTab('home');
//   setTimeout(() => handleSearch(), 100);
// }

// async function handleSearch() {
//   const city = cityInput.value.trim();

//   if (!city) {
//     showError('Please enter a city name');
//     return;
//   }

//   hideAll();
//   loading.classList.remove('hidden');

//   try {
//     const [photos, weather] = await Promise.all([
//       fetchPhotos(city),
//       fetchWeather(city)
//     ]);

//     if (!photos || photos.length === 0) {
//       throw new Error('No photos found for this destination');
//     }

//     displayResults(city, photos, weather);
//   } catch (err) {
//     showError(err.message || 'Unable to fetch destination information. Please try another city.');
//   } finally {
//     loading.classList.add('hidden');
//   }
// }

// async function fetchPhotos(city) {
//   const response = await fetch(
//     `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&per_page=6&client_id=${UNSPLASH_ACCESS_KEY}`
//   );

//   if (!response.ok) {
//     throw new Error('Failed to fetch photos');
//   }

//   const data = await response.json();
//   return data.results;
// }

// async function fetchWeather(city) {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${OPENWEATHER_API_KEY}`
//   );

//   if (!response.ok) {
//     if (response.status === 404) {
//       throw new Error('City not found');
//     }
//     throw new Error('Failed to fetch weather data');
//   }

//   const data = await response.json();
//   return data;
// }

// function displayResults(city, photos, weather) {
//   destinationName.textContent = city.charAt(0).toUpperCase() + city.slice(1);

//   photoGallery.innerHTML = photos.slice(0, 6).map(photo => `
//     <div class="photo-card">
//       <img src="${photo.urls.regular}" alt="${photo.alt_description || city}" loading="lazy">
//     </div>
//   `).join('');

//   const weatherIcon = getWeatherIcon(weather.weather[0].main);
//   weatherInfo.innerHTML = `
//     <div class="weather-icon">${weatherIcon}</div>
//     <div class="temperature">${Math.round(weather.main.temp)}°C</div>
//     <div class="weather-description">${weather.weather[0].description}</div>
//     <div class="weather-details">
//       <span>Feels like: ${Math.round(weather.main.feels_like)}°C</span>
//       <span>Humidity: ${weather.main.humidity}%</span>
//     </div>
//   `;

//   const cityKey = city.toLowerCase();
//   const cityData = destinationData[cityKey] || getDefaultData(city);

//   bestTime.innerHTML = `<p>${cityData.bestTime}</p>`;
//   travelTip.innerHTML = `<p>${cityData.tip}</p>`;

//   famousPlaces.innerHTML = cityData.places.map(place => `
//     <div class="place-card">
//       <h4>${place.name}</h4>
//       <p>${place.description}</p>
//     </div>
//   `).join('');

//   results.classList.remove('hidden');
// }

// function getWeatherIcon(condition) {
//   const icons = {
//     'Clear': '☀️',
//     'Clouds': '☁️',
//     'Rain': '🌧️',
//     'Drizzle': '🌦️',
//     'Thunderstorm': '⛈️',
//     'Snow': '❄️',
//     'Mist': '🌫️',
//     'Fog': '🌫️',
//     'Haze': '🌫️'
//   };
//   return icons[condition] || '🌤️';
// }

// function getDefaultData(city) {
//   return {
//     places: [
//       { name: 'City Center', description: 'Explore the heart of the city' },
//       { name: 'Historic District', description: 'Discover the rich history and culture' },
//       { name: 'Local Market', description: 'Experience authentic local flavors' },
//       { name: 'Scenic Viewpoint', description: 'Enjoy breathtaking city views' }
//     ],
//     bestTime: 'Research the climate patterns for optimal travel timing. Spring and fall typically offer pleasant weather.',
//     tip: 'Learn a few basic phrases in the local language and always carry a map or have offline maps downloaded.'
//   };
// }

// function showError(message) {
//   hideAll();
//   error.textContent = message;
//   error.classList.remove('hidden');
// }

// function hideAll() {
//   loading.classList.add('hidden');
//   error.classList.add('hidden');
//   results.classList.add('hidden');
// }

// function saveTrip(city, photoUrl) {
//   const trip = {
//     id: Date.now(),
//     city: city,
//     photo: photoUrl,
//     savedAt: new Date().toISOString()
//   };

//   if (!myTrips.find(t => t.city.toLowerCase() === city.toLowerCase())) {
//     myTrips.push(trip);
//     localStorage.setItem('myTrips', JSON.stringify(myTrips));
//   }
// }

// function displaySavedTrips() {
//   if (myTrips.length === 0) {
//     savedTrips.innerHTML = `
//       <div class="empty-state">
//         <div class="empty-icon">🗺️</div>
//         <p>No saved trips yet</p>
//         <p class="empty-hint">Search for destinations and save them to your trips!</p>
//       </div>
//     `;
//     return;
//   }

//   savedTrips.innerHTML = myTrips.map(trip => `
//     <div class="trip-card" data-city="${trip.city}">
//       <img src="${trip.photo}" alt="${trip.city}">
//       <div class="trip-info">
//         <h3>${trip.city}</h3>
//         <p>Saved on ${new Date(trip.savedAt).toLocaleDateString()}</p>
//       </div>
//     </div>
//   `).join('');

//   document.querySelectorAll('.trip-card').forEach(card => {
//     card.addEventListener('click', () => {
//       const city = card.getAttribute('data-city');
//       cityInput.value = city;
//       switchTab('home');
//       setTimeout(() => handleSearch(), 100);
//     });
//   });
// }


const  UNSPLASH_API_KEY = "A8eIoMWx1s-hgxz71ZYm6JHByb7G7TTFpPra_eQ1X0I";
const OPENWEATHER_API_KEY = "e90c2605bffee529038ea2322373e2a4";


// const state = {
//     currentTab: 'home',
//     currentSlide: 0,
//     savedTrips: JSON.parse(localStorage.getItem('savedTrips')) || []
// };

// document.addEventListener('DOMContentLoaded', () => {
//     initNavigation();
//     initSlideshow();
//     initSearchHandlers();
//     initPopularDestinations();
//     renderSavedTrips();
// });

// function initNavigation() {
//     const navBtns = document.querySelectorAll('.nav-btn');
//     navBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const tab = btn.dataset.tab;
//             switchTab(tab);
//         });
//     });
// }

// function switchTab(tab) {
//     document.querySelectorAll('.nav-btn').forEach(btn => {
//         btn.classList.remove('active');
//     });
//     document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

//     document.querySelectorAll('.tab-content').forEach(content => {
//         content.classList.add('hidden');
//     });
//     document.getElementById(`${tab}-tab`).classList.remove('hidden');

//     state.currentTab = tab;

//     if (tab === 'trips') {
//         renderSavedTrips();
//     }
// }

// function initSlideshow() {
//     const slides = document.querySelectorAll('.slide');
//     setInterval(() => {
//         slides[state.currentSlide].classList.remove('active');
//         state.currentSlide = (state.currentSlide + 1) % slides.length;
//         slides[state.currentSlide].classList.add('active');
//     }, 5000);
// }

// function initSearchHandlers() {
//     const homeSearchBtn = document.getElementById('home-search-btn');
//     const homeSearchInput = document.getElementById('home-search');
//     const exploreSearchBtn = document.getElementById('explore-search-btn');
//     const exploreSearchInput = document.getElementById('explore-search');

//     homeSearchBtn.addEventListener('click', () => {
//         const destination = homeSearchInput.value.trim();
//         if (destination) {
//             switchTab('explore');
//             searchDestination(destination);
//         }
//     });

//     homeSearchInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             const destination = homeSearchInput.value.trim();
//             if (destination) {
//                 switchTab('explore');
//                 searchDestination(destination);
//             }
//         }
//     });

//     exploreSearchBtn.addEventListener('click', () => {
//         const destination = exploreSearchInput.value.trim();
//         if (destination) {
//             searchDestination(destination);
//         }
//     });

//     exploreSearchInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             const destination = exploreSearchInput.value.trim();
//             if (destination) {
//                 searchDestination(destination);
//             }
//         }
//     });
// }

// function initPopularDestinations() {
//     const destCards = document.querySelectorAll('.destination-card');
//     destCards.forEach(card => {
//         card.addEventListener('click', () => {
//             const city = card.dataset.city;
//             switchTab('explore');
//             searchDestination(city);
//         });
//     });
// }

// async function searchDestination(destination) {
//     showLoading();
//     document.getElementById('explore-search').value = destination;

//     try {
//         const [photos, weather] = await Promise.all([
//             fetchUnsplashPhotos(destination),
//             fetchWeatherData(destination)
//         ]);

//         displayDestinationDetails(destination, photos, weather);
//     } catch (error) {
//         console.error('Error searching destination:', error);
//         displayError('Unable to fetch destination details. Please try again.');
//     } finally {
//         hideLoading();
//     }
// }

// async function fetchUnsplashPhotos(destination) {
//     const response = await fetch(
//         `https://api.unsplash.com/search/photos?query=${destination} india landmark&per_page=6&client_id=${UNSPLASH_API_KEY}`
//     );

//     if (!response.ok) {
//         console.warn('Unsplash API error, using fallback images');
//         return generateFallbackImages(destination);
//     }

//     const data = await response.json();
//     return data.results.length > 0 ? data.results : generateFallbackImages(destination);
// }

// function generateFallbackImages(destination) {
//     return [
//         { urls: { regular: `https://source.unsplash.com/800x600/?${destination},india,1` } },
//         { urls: { regular: `https://source.unsplash.com/800x600/?${destination},monument,2` } },
//         { urls: { regular: `https://source.unsplash.com/800x600/?${destination},landmark,3` } },
//         { urls: { regular: `https://source.unsplash.com/800x600/?${destination},tourism,4` } },
//         { urls: { regular: `https://source.unsplash.com/800x600/?${destination},travel,5` } },
//         { urls: { regular: `https://source.unsplash.com/800x600/?${destination},architecture,6` } }
//     ];
// }

// async function fetchWeatherData(destination) {
//     const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${destination},IN&units=metric&appid=${OPENWEATHER_API_KEY}`
//     );

//     if (!response.ok) {
//         console.warn('Weather API error, using fallback data');
//         return generateFallbackWeather(destination);
//     }

//     const data = await response.json();
//     return data;
// }

// function generateFallbackWeather(destination) {
//     const temps = [25, 28, 30, 27, 26];
//     const conditions = ['Clear', 'Clouds', 'Rain', 'Clear', 'Clouds'];
//     const today = new Date();

//     return {
//         list: temps.map((temp, i) => ({
//             dt: today.getTime() / 1000 + (i * 86400),
//             main: { temp, feels_like: temp + 2 },
//             weather: [{ main: conditions[i], description: conditions[i].toLowerCase(), icon: '01d' }],
//             wind: { speed: 3.5 }
//         })),
//         city: { name: destination }
//     };
// }

// function displayDestinationDetails(destination, photos, weather) {
//     const exploreResults = document.getElementById('explore-results');

//     const currentWeather = weather.list[0];
//     const forecast = weather.list.filter((item, index) => index % 8 === 0).slice(0, 5);

//     const travelTips = {
//         'Delhi': 'Visit during October to March for pleasant weather. Don\'t miss the street food at Chandni Chowk!',
//         'Mumbai': 'Best time is November to February. Try the local vada pav and explore Marine Drive at sunset.',
//         'Jaipur': 'October to March is ideal. Book a hot air balloon ride for stunning views of the Pink City.',
//         'Goa': 'Visit November to February for beaches. March to May is hot, and June to October is monsoon.',
//         'Kerala': 'September to March is perfect. Experience a houseboat stay in the backwaters of Alleppey.',
//         'Ladakh': 'June to September only when roads are open. Acclimatize properly to avoid altitude sickness.',
//         'Varanasi': 'October to March is comfortable. Witness the Ganga Aarti at Dashashwamedh Ghat at sunset.',
//         'Manali': 'March to June for pleasant weather, December to February for snow. Book accommodations early.',
//         'default': 'Research local customs and traditions. Stay hydrated and try authentic local cuisine.'
//     };

//     const bestTimes = {
//         'Delhi': 'October to March',
//         'Mumbai': 'November to February',
//         'Jaipur': 'October to March',
//         'Goa': 'November to February',
//         'Kerala': 'September to March',
//         'Ladakh': 'June to September',
//         'Varanasi': 'October to March',
//         'Manali': 'March to June (Summer) | December to February (Snow)',
//         'default': 'Check seasonal weather patterns'
//     };

//     const tip = travelTips[destination] || travelTips.default;
//     const bestTime = bestTimes[destination] || bestTimes.default;

//     exploreResults.innerHTML = `
//         <div class="destination-details">
//             <div class="dest-header">
//                 <h2>${destination}</h2>
//                 <button class="save-trip-btn" onclick="saveTrip('${destination}', '${photos[0].urls.regular}')">
//                     Save Trip
//                 </button>
//             </div>

//             <div class="weather-section">
//                 <h3>Current Weather</h3>
//                 <div class="current-weather">
//                     <div class="weather-icon">${getWeatherIcon(currentWeather.weather[0].main)}</div>
//                     <div class="weather-info">
//                         <h3>${Math.round(currentWeather.main.temp)}°C</h3>
//                         <p>${currentWeather.weather[0].description}</p>
//                         <p>Feels like ${Math.round(currentWeather.main.feels_like)}°C</p>
//                     </div>
//                 </div>

//                 <h3>5-Day Forecast</h3>
//                 <div class="forecast-grid">
//                     ${forecast.map(day => `
//                         <div class="forecast-item">
//                             <h4>${new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
//                             <div class="weather-icon">${getWeatherIcon(day.weather[0].main)}</div>
//                             <p>${Math.round(day.main.temp)}°C</p>
//                             <p>${day.weather[0].main}</p>
//                         </div>
//                     `).join('')}
//                 </div>
//             </div>

//             <div class="info-grid">
//                 <div class="info-card">
//                     <h3>Travel Tip</h3>
//                     <p>${tip}</p>
//                 </div>
//                 <div class="info-card">
//                     <h3>Best Time to Visit</h3>
//                     <p>${bestTime}</p>
//                 </div>
//             </div>

//             <div class="landmarks-section">
//                 <h3>Famous Landmarks & Places</h3>
//                 <div class="landmarks-grid">
//                     ${photos.map(photo => `
//                         <div class="landmark-card">
//                             <img src="${photo.urls.regular}" alt="Landmark in ${destination}">
//                         </div>
//                     `).join('')}
//                 </div>
//             </div>
//         </div>
//     `;
// }

// function getWeatherIcon(condition) {
//     const icons = {
//         'Clear': '☀️',
//         'Clouds': '☁️',
//         'Rain': '🌧️',
//         'Drizzle': '🌦️',
//         'Thunderstorm': '⛈️',
//         'Snow': '❄️',
//         'Mist': '🌫️',
//         'Haze': '🌫️',
//         'Fog': '🌫️'
//     };
//     return icons[condition] || '🌤️';
// }

// function saveTrip(destination, imageUrl) {
//     const trip = {
//         id: Date.now(),
//         destination,
//         imageUrl,
//         savedAt: new Date().toISOString()
//     };

//     const existingTrip = state.savedTrips.find(t => t.destination === destination);
//     if (existingTrip) {
//         alert('This trip is already saved!');
//         return;
//     }

//     state.savedTrips.push(trip);
//     localStorage.setItem('savedTrips', JSON.stringify(state.savedTrips));
//     alert(`${destination} has been saved to your trips!`);
// }

// function renderSavedTrips() {
//     const savedTripsGrid = document.getElementById('saved-trips');

//     if (state.savedTrips.length === 0) {
//         savedTripsGrid.innerHTML = `
//             <div class="empty-state">
//                 <h3>No saved trips yet</h3>
//                 <p>Start exploring destinations and save your favorite trips!</p>
//             </div>
//         `;
//         return;
//     }

//     savedTripsGrid.innerHTML = state.savedTrips.map(trip => `
//         <div class="trip-card">
//             <div class="trip-image" style="background-image: url('${trip.imageUrl}')"></div>
//             <div class="trip-info">
//                 <h3>${trip.destination}</h3>
//                 <button class="remove-btn" onclick="removeTrip(${trip.id})">Remove</button>
//             </div>
//         </div>
//     `).join('');
// }

// function removeTrip(tripId) {
//     state.savedTrips = state.savedTrips.filter(trip => trip.id !== tripId);
//     localStorage.setItem('savedTrips', JSON.stringify(state.savedTrips));
//     renderSavedTrips();
// }

// function showLoading() {
//     document.getElementById('loading').classList.remove('hidden');
// }

// function hideLoading() {
//     document.getElementById('loading').classList.add('hidden');
// }

// function displayError(message) {
//     const exploreResults = document.getElementById('explore-results');
//     exploreResults.innerHTML = `
//         <div class="empty-state">
//             <h3>Oops!</h3>
//             <p>${message}</p>
//         </div>
//     `;
// }
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
