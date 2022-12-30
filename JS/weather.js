//const API_key = "e20b0d4e44f38c0ff91e099610ce28d5";
const CLOUD_ICON = "fa-regular fa-cloud";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");
            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            cityContainer.innerText = data.name;
        })
}
function onGeoError(){
    alert("can't find your location.");
}

function getWeatherInfo(){
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}


