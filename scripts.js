function calculateDogAge() {
  const birthdayInput = document.getElementById("dog-birthday");
  const birthdayValue = birthdayInput.value;
  if (!birthdayValue) {
    document.getElementById("result").innerText =
      "¡Por favor, selecciona una fecha! ¿Quizás tu perro tiene una máquina del tiempo que no conocemos? 🐶⏰";
    return;
  }
  const birthday = new Date(birthdayValue);
  const today = new Date();
  const ageInMilliseconds = today - birthday;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44; // Average number of days in a month
  const ageInYears = ageInDays / 365.25; // Account for leap years

  let yearsText = "años";

  if (ageInYears >= 1 && ageInYears < 2) {
    yearsText = "año";
  }

  document.getElementById("result").innerText = `Tu perro tiene ${Math.floor(
    ageInYears
  )} ${yearsText}, ${Math.floor(ageInMonths % 12)} meses y ${Math.floor(
    ageInDays % 30.44
  )} días.`;
}

// Set default date to June 16, 2022
document.getElementById("dog-birthday").valueAsDate = new Date(
  Date.UTC(2022, 5, 16)
);
