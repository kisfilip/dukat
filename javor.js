window.onload = function() {
// trigger on scroll event

// naslov fadein
var naslov = document.getElementsByClassName("mainHeader")[0];
var logo = document.getElementsByClassName("logoDukat")[0];
var nav = document.getElementsByClassName("navigation")[0];
var btn = document.getElementsByClassName("button")[0];
var landing = document.getElementsByClassName("landing")[0];

window.onscroll = function () {
  var doc = document.documentElement, body = document.body;
  var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

  // get menu
  var menu = document.getElementsByClassName("sectionPic1")[0];
  var Onama = document.getElementsByClassName("sectionOnama")[0];
  var sectionJelovnik = document.getElementsByClassName("sectionJelovnik")[0];
  // get scrollbar position
  // if scrollbar past menu height: set position to fixed,
  if (top > (Onama.offsetHeight + Onama.offsetTop)) {
    sectionJelovnik.style.marginTop = "100vh";
     menu.style.position = "fixed";
     menu.style.top = "0";
     menu.style.right = "0";
     menu.style.bottom = "0";
     menu.style.left = "0";
  }
  // set position to absolute
  else {
     menu.style.position = "static";
     sectionJelovnik.style.marginTop = "0";
  }
}

//   if (top > 90) {
//     naslov.classList.add("invisible");
//   }
//     else {
//     naslov.classList.remove("invisible");
//     };
// }
//
// setTimeout(function () {
//     naslov.classList.remove("invisible");
//   }, 250);

setTimeout(function () {
    landing.classList.remove("invisible");
    setTimeout(function () {
      logo.classList.remove("invisible");

    }, 300);

    setTimeout(function () {
      nav.classList.remove("invisible");
      btn.classList.remove("invisible");
    }, 750);
  }, 250);

}


function modalToggle() {
  var modal = document.getElementsByClassName("modalMenu")[0];
  modal.classList.toggle("hidden");
  modal.classList.toggle("invisible");
}
