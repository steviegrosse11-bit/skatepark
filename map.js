const map = L.map('map').setView([53.5526, -1.4797], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const parks = [
  L.marker([53.5526, -1.4797]).bindPopup('Barnsley Skatepark'),
  L.marker([53.8008, -1.5491]).bindPopup('Leeds Hyde Park Skatepark')
];

const shops = [
  L.marker([53.383, -1.4659]).bindPopup('Sheffield Skate Shop'),
  L.marker([53.4808, -2.2426]).bindPopup('Manchester Decks & Wheels')
];

function clearMap() {
  parks.forEach(p => map.removeLayer(p));
  shops.forEach(s => map.removeLayer(s));
}

function showParks() {
  clearMap();
  parks.forEach(p => p.addTo(map));
}

function showShops() {
  clearMap();
  shops.forEach(s => s.addTo(map));
}

function showAll() {
  clearMap();
  parks.forEach(p => p.addTo(map));
  shops.forEach(s => s.addTo(map));
}

showAll();
