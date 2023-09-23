function calculateDogAge() {
  var birthday = new Date(document.getElementById("dog-birthday").value);
  var today = new Date();
  var ageInMilliseconds = today - birthday;
  var ageInSeconds = ageInMilliseconds / 1000;
  var ageInMinutes = ageInSeconds / 60;
  var ageInHours = ageInMinutes / 60;
  var ageInDays = ageInHours / 24;
  var ageInMonths = ageInDays / 30.44; // Promedio de días en un mes
  var ageInYears = ageInDays / 365.25; // Promedio de días en un año

  document.getElementById("result").innerHTML =
    "Tu perro tiene " +
    Math.floor(ageInYears) +
    " años, " +
    Math.floor(ageInMonths % 12) +
    " meses, y " +
    Math.floor(ageInDays % 30.44) +
    " días.";
}

// Asegúrate de tener un elemento con id "logo" en tu HTML
var logo = document.querySelector(".logo");

// Guarda la posición inicial del logo
var initialPosition = {
  left: logo.offsetLeft,
  top: logo.offsetTop,
};

// Cambia el cursor al pasar por encima del logo
logo.style.cursor = "pointer";

function dragStart(event) {
  logo.style.position = "absolute";
  logo.style.zIndex = 1000;

  function moveAt(pageX, pageY) {
    logo.style.left = pageX - logo.offsetWidth / 2 + "px";
    logo.style.top = pageY - logo.offsetHeight / 2 + "px";
  }

  moveAt(event.pageX, event.pageY);

  function dragMove(event) {
    moveAt(event.pageX, event.pageY);
    event.preventDefault();
  }

  document.addEventListener("mousemove", dragMove);
  document.addEventListener("touchmove", dragMove);

  function dragEnd() {
    document.removeEventListener("mousemove", dragMove);
    document.removeEventListener("touchmove", dragMove);
    logo.onmouseup = null;
    logo.ontouchend = null;
  }

  logo.onmouseup = dragEnd;
  logo.ontouchend = dragEnd;
}

// Permite arrastrar el logo
logo.onmousedown = dragStart;
logo.ontouchstart = dragStart;

// Evita que el logo se salga de la pantalla al arrastrarlo
logo.ondragstart = function () {
  return false;
};

// Devuelve el logo a su posición inicial al hacer doble clic en él
logo.ondblclick = function () {
  logo.style.left = initialPosition.left + "px";
  logo.style.top = initialPosition.top + "px";
};
