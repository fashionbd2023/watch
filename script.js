function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const hour1 = hours.charAt(0);
  const hour2 = hours.charAt(1);
  const minute1 = minutes.charAt(0);
  const minute2 = minutes.charAt(1);
  const second1 = seconds.charAt(0);
  const second2 = seconds.charAt(1);

  setDigit('digit-1', hour1);
  setDigit('digit-2', hour2);
  setDigit('digit-3', minute1);
  setDigit('digit-4', minute2);
  setDigit('digit-5', second1);
  setDigit('digit-6', second2);
}

function setDigit(digitClass, digitValue) {
  const digitElement = document.querySelector(`.digit.${digitClass}`);
  digitElement.textContent = digitValue;
}

updateClock();
setInterval(updateClock, 1000);
