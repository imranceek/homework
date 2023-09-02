const body = document.querySelector("body");
let soat = new Date();      
let vaqt =  soat.getHours();
const time = document.getElementById("soat");
let data = setInterval(() => {
    console.clear();
    time.textContent = new Date().toLocaleTimeString();
  }, 1000);
if ( vaqt >= 6 &&  vaqt < 12) {
  body.style.backgroundImage = "url(./images/morning.jpg)";
} else if ( vaqt >= 12 &&  vaqt < 18) {
  body.style.backgroundImage = "url(./images/afternoon.jpg)";
} else if ( vaqt >= 18 &&  vaqt < 20) {
  body.style.backgroundImage = "url(./images/sunset.jpg)";
} else {
  body.style.backgroundImage = "url(./images/night.jpeg)";
}
