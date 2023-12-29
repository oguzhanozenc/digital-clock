// SELECTORS
const hour = document.getElementById("hour");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

// FUNCTIONS
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampmvalue = "AM";

  if (h > 12) {
    h = h - 12;
    ampmvalue = "PM";
  }

  h = h < 10 ? "0" + h : h;

  hour.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  ampm.innerText = ampmvalue;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
