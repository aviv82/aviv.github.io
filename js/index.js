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
    var dotpoint = 60;

    if (dottop < windowheight - dotpoint) {
      dot[i].classList.add("dotted");
    } else {
      dot[i].classList.remove("dotted");
    }
  }
}
window.addEventListener("scroll", boxo);

function boxo() {
  var boxo = document.querySelectorAll(".boxo");

  for (var i = 0; i < boxo.length; i++) {
    var windowheight = window.innerHeight;
    var boxotop = boxo[i].getBoundingClientRect().top;
    var boxopoint = 80;

    if (boxotop < windowheight - boxopoint) {
      boxo[i].classList.add("boxero");
    } else {
      boxo[i].classList.remove("boxero");
    }
  }
}
window.addEventListener("scroll", boxi);

function boxi() {
  var boxi = document.querySelectorAll(".boxi");

  for (var i = 0; i < boxi.length; i++) {
    var windowheight = window.innerHeight;
    var boxitop = boxi[i].getBoundingClientRect().top;
    var boxipoint = 80;

    if (boxitop < windowheight - boxipoint) {
      boxi[i].classList.add("boxeri");
    } else {
      boxi[i].classList.remove("boxeri");
    }
  }
}
window.addEventListener("scroll", boxs);

function boxs() {
  var boxs = document.querySelectorAll(".boxs");

  for (var i = 0; i < boxs.length; i++) {
    var windowheight = window.innerHeight;
    var boxstop = boxs[i].getBoundingClientRect().top;
    var boxspoint = 220;

    if (boxstop < windowheight - boxspoint) {
      boxs[i].classList.add("boxers");
    } else {
      boxs[i].classList.remove("boxers");
    }
  }
}
window.addEventListener("scroll", but);

function but() {
  var but = document.querySelectorAll(".but");

  for (var i = 0; i < but.length; i++) {
    var windowheight = window.innerHeight;
    var boxstop = but[i].getBoundingClientRect().top;
    var boxspoint = 200;

    if (boxstop < windowheight - boxspoint) {
      but[i].classList.add("button");
    } else {
      but[i].classList.remove("button");
    }
  }
}
window.addEventListener("scroll", buts);

function buts() {
  var buts = document.querySelectorAll(".buts");

  for (var i = 0; i < buts.length; i++) {
    var windowheight = window.innerHeight;
    var boxstop = buts[i].getBoundingClientRect().top;
    var boxspoint = 60;

    if (boxstop < windowheight - boxspoint) {
      buts[i].classList.add("buttons");
    } else {
      buts[i].classList.remove("buttons");
    }
  }
}
window.addEventListener("scroll", parent);

function parent() {
  var parent = document.querySelectorAll(".parent");

  for (var i = 0; i < parent.length; i++) {
    var windowheight = window.innerHeight;
    var boxstop = parent[i].getBoundingClientRect().top;
    var boxspoint = 200;

    if (boxstop < windowheight - boxspoint) {
      parent[i].classList.add("parents");
    } else {
      parent[i].classList.remove("parents");
    }
  }
}
window.addEventListener("scroll", hat);

function hat() {
  var hat = document.querySelectorAll(".hat");

  for (var i = 0; i < hat.length; i++) {
    var windowheight = window.innerHeight;
    var boxstop = hat[i].getBoundingClientRect().top;
    var boxspoint = 240;

    if (boxstop < windowheight - boxspoint) {
      hat[i].classList.add("hats");
    } else {
      hat[i].classList.remove("hats");
    }
  }
}
window.addEventListener("scroll", hot);

function hot() {
  var hot = document.querySelectorAll(".hot");

  for (var i = 0; i < hot.length; i++) {
    var windowheight = window.innerHeight;
    var boxstop = hot[i].getBoundingClientRect().top;
    var boxspoint = 240;

    if (boxstop < windowheight - boxspoint) {
      hot[i].classList.add("hots");
    } else {
      hot[i].classList.remove("hots");
    }
  }
}
window.addEventListener("scroll", hut);

function hut() {
  var hut = document.querySelectorAll(".hut");

  for (var i = 0; i < hut.length; i++) {
    var windowheight = window.innerHeight;
    var boxstop = hut[i].getBoundingClientRect().top;
    var boxspoint = 200;

    if (boxstop < windowheight - boxspoint) {
      hut[i].classList.add("huts");
    } else {
      hut[i].classList.remove("huts");
    }
  }
}
