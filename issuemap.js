// Initialize Leaflet Map (centered on India)
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example markers with categories
const issues = [
  {
    coords: [28.6139, 77.2090],
    type: "Pothole",
    description: "Big pothole near Connaught Place, New Delhi"
  },
  {
    coords: [22.5726, 88.3639],
    type: "Streetlight",
    description: "Streetlight not working in Kolkata"
  },
  {
    coords: [19.0760, 72.8777],
    type: "Garbage",
    description: "Garbage pile-up in Mumbai"
  }
];

// Add markers dynamically
issues.forEach(issue => {
  let iconUrl = "";
  if (issue.type === "Pothole") iconUrl = "icons/pothole.png";
  if (issue.type === "Streetlight") iconUrl = "icons/streetlight.png";
  if (issue.type === "Garbage") iconUrl = "icons/garbage.png";

  const customIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  L.marker(issue.coords, { icon: customIcon })
    .addTo(map)
    .bindPopup(`<b>${issue.type}</b><br>${issue.description}`);
});
