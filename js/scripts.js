$(document).ready(function() {
  $("form#formMain").submit(function(event) {
    event.preventDefault();

    var whichAnimal = $("#animalsForm").val();

    if(whichAnimal = "turtles") {
      window.location.href = "https://en.wikipedia.org/wiki/Turtle";
    } else if(whichAnimal = "snakes") {
      window.location.href = "https://en.wikipedia.org/wiki/Snake";
    } else {
      window.location.href = "https://en.wikipedia.org/wiki/Insect";
    }
  });
});
