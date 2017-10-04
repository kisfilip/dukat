window.onload = function() {
// trigger on scroll event

// naslov fadein
var naslov = document.getElementsByClassName("mainHeader")[0];
var logo = document.getElementsByClassName("logoDukat")[0];
var nav = document.getElementsByClassName("navigation")[0];
var btn = document.getElementsByClassName("button")[0];
var landing = document.getElementsByClassName("landing")[0];

let fadeInElements = document.getElementsByClassName("fadeInvisible");

let landingPics = document.getElementsByClassName("landingPic");
let landingCounter = 0;

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

function getCoords(elem) { // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}



for (let i = 0; i < fadeInElements.length; i++) {
  if ((getCoords(fadeInElements[i]).top - (window.innerHeight/1.1)) < top) {
    fadeInElements[i].classList.remove("fadeInvisible")
  } else {
    fadeInElements[i].classList.add("fadeInvisible")
  }
}
}

setTimeout(function () {
    landing.classList.remove("invisible");
    setTimeout(function () {
      logo.classList.remove("invisible");

    }, 300);

    setTimeout(function () {
      nav.classList.remove("invisible");
      btn.classList.remove("invisible");
    }, 750);
  }, 1500);

function slideShow() {
  landingPics[landingCounter].classList.add("landingInvisible");
  landingCounter++;
  if (landingCounter == 5) {
    landingPics[0].classList.remove("landingInvisible");
    setTimeout(function(){
    for (var i = 1; i < landingPics.length; i++) {
      landingPics[i].classList.remove("landingInvisible");
    }
  }, 1500)
    landingCounter = 0;
  }
  setTimeout(slideShow, 3000);
}

setTimeout(slideShow, 5000);


function modalToggle() {
  var modal = document.getElementsByClassName("modalMenu")[0];
  modal.classList.toggle("hidden");
  modal.classList.toggle("invisible");
}
}
