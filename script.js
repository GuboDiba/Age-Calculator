
document.getElementById('calculateBtn').addEventListener('click', function () {
  var birthdate = new Date(document.getElementById('birthdate').value);
  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthdate.getFullYear();

  // Check if the birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  document.getElementById('result').textContent = 'Your age is ' + age;
});