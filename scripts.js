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
