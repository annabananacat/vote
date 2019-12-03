$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#votingage').show();
  } else if (age === 18) {
    alert("Now don't go crazy!");
    $('#votingage').show();
  } else {
    $('#under-18').show();
  }
});
