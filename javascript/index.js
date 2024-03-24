function updateTime () {
//Dubai
let dubaiElement = document.querySelector("#dubai");
if (dubaiElement) {
let dubaiDateElement = dubaiElement.querySelector(".date");
let dubaiTimeElement = dubaiElement.querySelector(".time");
let dubaiTime = moment().tz("Asia/Dubai");

dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");

//Mexico
let mexicoElement = document.querySelector("#mexico");
if (mexicoElement) {
let mexicoDateElement = mexicoElement.querySelector(".date");
let mexicoTimeElement = mexicoElement.querySelector(".time");
let mexicoTime = moment().tz("America/Mexico_City");

mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
mexicoTimeElement.innerHTML = mexicoTime.format("h:mm:ss [<small>]A[</small>]");

//Prague
let pragueElement = document.querySelector("#prague");
if (pragueElement) {
let pragueDateElement = pragueElement.querySelector(".date");
let pragueTimeElement = pragueElement.querySelector(".time");
let pragueTime = moment().tz("Europe/Prague");

pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
pragueTimeElement.innerHTML = pragueTime.format("h:mm:ss [<small>]A[</small>]");
};
};
};
};

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    };
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` 
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    <a href="/">All cities</a>`;

};

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement-addEventListener("change", updateCity);
