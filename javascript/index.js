function updateTime () {
//Dubai
let dubaiElement = document.querySelector("#dubai");
let dubaiDateElement = dubaiElement.querySelector(".date");
let dubaiTimeElement = dubaiElement.querySelector(".time");
let dubaiTime = moment().tz("Asia/Dubai");

dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");

//Prague
let pragueElement = document.querySelector("#prague");
let pragueDateElement = pragueElement.querySelector(".date");
let pragueTimeElement = pragueElement.querySelector(".time");
let pragueTime = moment().tz("Europe/Prague");

pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
pragueTimeElement.innerHTML = pragueTime.format("h:mm:ss [<small>]A[</small>]");

};

updateTime();
setInterval(updateTime, 1000);
