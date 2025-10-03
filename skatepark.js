const map = L.map('map').setView([53.5526, -1.4797], 10); // Barnsley

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([53.5526, -1.4797]).addTo(map)
  .bindPopup('<b>Barnsley Skatepark</b><br>Rated 4.5 stars')
  .openPopup();
