window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".hide");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll", animate);

function animate() {
  var animate = document.querySelectorAll(".inanimate");

  for (var i = 0; i < animate.length; i++) {
    var windowheight = window.innerHeight;
    var animatetop = animate[i].getBoundingClientRect().top;
    var animatepoint = 200;

    if (animatetop < windowheight - animatepoint) {
      animate[i].classList.add("animate");
    } else {
      animate[i].classList.remove("animate");
    }
  }
}

window.addEventListener("scroll", beau);

function beau() {
  var beau = document.querySelectorAll(".beau");

  for (var i = 0; i < beau.length; i++) {
    var windowheight = window.innerHeight;
    var beautop = beau[i].getBoundingClientRect().top;
    var beaupoint = 200;

    if (beautop < windowheight - beaupoint) {
      beau[i].classList.add("beauty");
    } else {
      beau[i].classList.remove("beauty");
    }
  }
}
window.addEventListener("scroll", circ);

function circ() {
  var circ = document.querySelectorAll(".circ");

  for (var i = 0; i < circ.length; i++) {
    var windowheight = window.innerHeight;
    var circtop = circ[i].getBoundingClientRect().top;
    var circpoint = 200;

    if (circtop < windowheight - circpoint) {
      circ[i].classList.add("circle");
    } else {
      circ[i].classList.remove("circle");
    }
  }
}

window.addEventListener("scroll", line);

function line() {
  var line = document.querySelectorAll(".line");

  for (var i = 0; i < line.length; i++) {
    var windowheight = window.innerHeight;
    var linetop = line[i].getBoundingClientRect().top;
    var linepoint = 220;

    if (linetop < windowheight - linepoint) {
      line[i].classList.add("inline");
    } else {
      line[i].classList.remove("inline");
    }
  }
}
window.addEventListener("scroll", under);

function under() {
  var under = document.querySelectorAll(".under");

  for (var i = 0; i < under.length; i++) {
    var windowheight = window.innerHeight;
    var undertop = under[i].getBoundingClientRect().top;
    var underpoint = 200;

    if (undertop < windowheight - underpoint) {
      under[i].classList.add("underscore");
    } else {
      under[i].classList.remove("underscore");
    }
  }
}
window.addEventListener("scroll", dot);

function dot() {
  var dot = document.querySelectorAll(".dot");

  for (var i = 0; i < dot.length; i++) {
    var windowheight = window.innerHeight;
    var dottop = dot[i].getBoundingClientRect().top;
    var dotpoint = 200;

    if (dottop < windowheight - dotpoint) {
      dot[i].classList.add("dotted");
    } else {
      dot[i].classList.remove("dotted");
    }
  }
}
