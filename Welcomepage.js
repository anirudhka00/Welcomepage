var currentHour = new Date().getHours();
if (currentHour >= 6 && currentHour < 12) {
  document.getElementById("demo").innerHTML = "Good Morning!!! ";
  document.body.style.backgroundColor = "#F8A835";
  document.getElementById("image").src = "morning.jpg";
} else if (currentHour >= 12 && currentHour < 18) {
  document.getElementById("demo").innerHTML = "Good Afternoon!!! ";
  document.body.style.backgroundColor = "#9D581E";
  document.getElementById("image").src = "afternoon.jpg";
} else {
  document.getElementById("demo").innerHTML = "Good Evening!!! ";
  document.body.style.backgroundColor = "#121F24";
  document.getElementById("image").src = "nighttime.jpg";
}
