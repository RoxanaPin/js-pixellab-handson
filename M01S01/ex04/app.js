
var MathPI = document.getElementById('radius');

var elementResult = document.getElementById('result');

var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var radius = MathPI.value || 0;

  var result = 0;

  result = Math.PI * radius * radius;

  elementResult.innerText = result;
  event.preventDefault();
});
