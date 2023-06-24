const redWatch = document.getElementById('redWatch');
const blackWatch = document.getElementById('blackWatch');
const blueWatch = document.getElementById('blueWatch');
const purpleWatch = document.getElementById('purpleWatch');
const watchId = document.getElementById('watchId');
const Hrate = document.getElementById('Hrate');
const timeBtn = document.getElementById('time-btn');
const heartDiv = document.getElementById('heart-div');
const dateTime = document.getElementById('dateTime');

setInterval(function () {
  var date = new Date().toLocaleTimeString();
  dateTime.innerText = date;
}, 1000);

redWatch.addEventListener('click', function () {
  watchId.src = 'https://i.imgur.com/PTgQlim.png';
});

blackWatch.addEventListener('click', function () {
  watchId.src = 'https://i.imgur.com/iOeUBV7.png';
});

blueWatch.addEventListener('click', function () {
  watchId.src = 'https://i.imgur.com/Mplj1YR.png';
});

purpleWatch.addEventListener('click', function () {
  watchId.src = 'https://i.imgur.com/xSIK4M8.png';
});

timeBtn.addEventListener('click', function () {
  heartDiv.style.display = 'none';
  dateTime.style.display = 'block';
});

Hrate.addEventListener('click', function () {
  dateTime.style.display = 'none';
  heartDiv.style.display = 'block';
});
