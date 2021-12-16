function locationString(location) {
  let myLocation = location.split(", ").slice(1).join(", ");
  return myLocation;
}

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Your browser or device doesn't support Geolocation");
  }
}

// If we have a successful location update
function success(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=91a9b5c5cbb54f449ca676d7f55eae19`
  )
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById("userLocation").innerHTML =
          "This User is making lists from: " +
          locationString(data.results[0].formatted))
    );
}

// If something has gone wrong with the geolocation request
function error(position) {
  alert("Error code " + position.code + ". " + position.message);
}

export { getUserLocation };
