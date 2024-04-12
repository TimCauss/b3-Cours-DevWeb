let issRoute = [];

let map = L.map("map").setView([51.505, -0.09], 5);
let polyline = L.polyline(issRoute, { color: "red" }).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([0, 0]).addTo(map);

async function fetchISS() {
  try {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();
    const { latitude, longitude } = data.iss_position;

    document.getElementById("latitude").textContent = latitude;
    document.getElementById("longitude").textContent = longitude;

    marker.setLatLng([latitude, longitude]);
    marker.bindPopup("<b>ISS Location!</b><br>").openPopup();

    issRoute.push([latitude, longitude]);
    polyline.setLatLngs(issRoute);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    document.querySelector(".error").textContent =
      "Erreur lors de la récupération des donnée";
  }
}

setInterval(fetchISS, 1000);
fetchISS();
