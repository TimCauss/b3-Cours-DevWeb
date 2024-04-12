async function fetchISS() {
  try {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();
    const { latitude, longitude } = data.iss_position;
    console.log(data);
    document.getElementById("latitude").textContent = latitude;
    document.getElementById("longitude").textContent = longitude;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    document.querySelector(".error").textContent =
      "Erreur lors de la récupération des donnée";
  }
}

setInterval(fetchISS, 1000);
fetchLocationAndUpdateUI();
