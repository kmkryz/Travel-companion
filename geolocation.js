// geolocation.js

const myElement = document.getElementById("demo");
const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");

function getLocation() {
const searchButton = document.getElementById('locationButton');

  if (navigator.geolocation) {
    searchButton.classList.add('animate');
    setTimeout(() => searchButton.classList.remove('animate'), 600);
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  myElement.innerHTML = `Latitude: ${latitude}<br><br>Longitude: ${longitude}<br>`;


  drawMap(latitude, longitude);


  getAddress(latitude, longitude);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      myElement.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      myElement.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      myElement.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      myElement.innerHTML = "An unknown error occurred.";
      break;
  }
}

function drawMap(latitude, longitude) {
  const mapUrl = `https://maps.locationiq.com/v2/staticmap?key=pk.e413c4abe570c7a8a1280f4688bbedb9&center=${latitude},${longitude}&zoom=13&size=800x600&format=png`;

  const mapImage = new Image();
  mapImage.onload = function () {
    ctx.drawImage(mapImage, 0, 0);
  };
  mapImage.src = mapUrl;
}

async function getAddress(latitude, longitude) {
  const apiKey = 'pk.e413c4abe570c7a8a1280f4688bbedb9'; 
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const address = data.address;
    myElement.innerHTML += `<br>Street: ${address.road}<br><br>City: ${address.city}<br><br>State: ${address.state}<br><br>Zip Code: ${address.postcode}`;
  } catch (error) {
    console.error('Error fetching address:', error);
    myElement.innerHTML += '<br>Error fetching address';
  }
}


window.getLocation = getLocation;
