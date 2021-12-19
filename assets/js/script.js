
//mini script para cambiar clase bg al nav cuando haga scroll, no me gusto como quedan las letras todas piluchas, se mezcla con el texto
$(function () {
  var navbar = $(".navbar");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      navbar.removeClass("bg-transparent").addClass("bg-info");
    } else {
      navbar.removeClass("bg-info").addClass("bg-transparent");
    }
  });
});

console.log("hola lo cabroh");
