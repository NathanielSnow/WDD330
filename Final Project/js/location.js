const lookUpLocation = (position) => {
  const { latitude, longitude } = position.coords;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`
  )
    .then((response) => response.json())
    .then(confirm.log);
};

window.navigator.geolocation.getCurrentPosition(lookUpLocation, console.log);
