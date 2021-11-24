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
