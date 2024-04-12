async function fetchLocation() {
  const response = await fetch("http://api.open-notify.org/iss-now.json");
  const infos = await response.json();
  console.log(infos);
}

fetchLocation();
