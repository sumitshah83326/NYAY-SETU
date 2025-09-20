// Toggle side menu
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  if (menu.style.left === "0px") {
    menu.style.left = "-260px";
  } else {
    menu.style.left = "0px";
  }
}

// Dashboard Button Functions
function reportIssue() {
  alert("Redirect to Report Issue page.");
}

function myReports() {
  alert("Redirect to My Report List page.");
}

function openMap() {
  document.getElementById("map").scrollIntoView({ behavior: "smooth" });
}

function aiChakra() {
  alert("Redirect to AI Chakra page.");
}

// Initialize Leaflet Map
const map = L.map('map').setView([20.5937, 78.9629], 5); // India center

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example Marker
L.marker([28.6139, 77.2090]).addTo(map)
  .bindPopup('Example Issue in New Delhi')
  .openPopup();
