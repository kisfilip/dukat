window.onload = function() {
// trigger on scroll event

// naslov fadein
var naslov = document.getElementsByClassName("mainHeader")[0];
var logo = document.getElementsByClassName("naslovDukat")[0];
let logoHead = document.getElementsByClassName("logoHead")[0];
var nav = document.getElementsByClassName("navigation")[0];
var btn = document.getElementsByClassName("button")[0];
var landing = document.getElementsByClassName("landing")[0];
let slideshowContain = document.getElementsByClassName("slideshowContain")[0];
let modal = document.getElementsByClassName("modalMenu")[0];

let oNamaBg = document.getElementsByClassName("oNamaBg")[0];


let fadeInElements = document.getElementsByClassName("fade");

let landingPics = document.getElementsByClassName("landingPic");
let landingCounter = 0;


window.onscroll = function () {
  var doc = document.documentElement, body = document.body;
  var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

  // get menu
  var menu = document.getElementsByClassName("sectionPic1")[0];
  let kontakt = document.getElementsByClassName("sectionKontakt")[0];
  var oNama = document.getElementsByClassName("sectionOnama")[0];
  var sectionJelovnik = document.getElementsByClassName("sectionJelovnik")[0];
  // get scrollbar position
  // if scrollbar past menu height: set position to fixed,
  // if (top > (oNama.offsetHeight + oNama.offsetTop)) {
  //   sectionJelovnik.style.marginTop = "70vh";
  //    menu.style.position = "fixed";
  //    menu.style.top = "0";
  //    menu.style.right = "0";
  //    menu.style.bottom = "0";
  //    menu.style.left = "0";
  // }
  // // set position to absolute
  // else {
  //    menu.style.position = "static";
  //    sectionJelovnik.style.marginTop = "0";
  // }

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
  if ((getCoords(fadeInElements[i]).top - (window.innerHeight/1.1)) < top
    &&(getCoords(fadeInElements[i]).top + (window.innerHeight/3)) > top) {
    fadeInElements[i].classList.remove("fadeInvisible")
  } else {
    fadeInElements[i].classList.add("fadeInvisible")
  }
}

function landingScroll() {
  if (top > 0 && top < window.innerHeight) {
    landing.style.transform = "translateY(" + top/2.5 + "px)";
  }
}

landingScroll();

function logoScroll() {
  if (top > 0) {
    logo.style.transform = "translateY(" + top/9 + "px)";
    logoHead.style.transform = "translateY(" + top/9 + "px)";
  }
}

logoScroll();

let oNamaTop = getCoords(oNama).top;
let kontaktTop = getCoords(kontakt).top;

function oNamaScroll() {
  if (top > oNamaTop) {
    oNamaBg.style.transform = "translateY(" + ((top - oNamaTop)/2) + "px)";
  } else {
    oNamaBg.style.transform = "translateY(" + ((top - oNamaTop)/2) + "px)";
  }

}
oNamaScroll();

let menuBtn = document.getElementsByClassName("menuIcon")[0];
let jelovnikTop = getCoords(document.getElementsByClassName("sectionJelovnik")[0]).top;

function menuColor() {
  if (top > kontaktTop && top < oNamaTop || window.innerWidth < 1000 && top > jelovnikTop) {
    menuBtn.style.fill = "#634545"
    console.log("eto");
  }
  else {
    menuBtn.style.fill = "#EFE4C2"
  }
}

menuColor();



let sectionPic1Top = getCoords(menu).top;
function chefSectionScroll() {
  if (jelovnikTop - menu.offsetHeight < top) {
    menu.style.transform = "translateY(" + (top - (jelovnikTop - menu.offsetHeight))/1.5 + "px)";
  } else {
    menu.style.transform = "translateY(" + 0 +"px)";
  }
}
chefSectionScroll();
}

setTimeout(function () {
    slideshowContain.classList.remove("invisible");
  }, 1500);

    // setTimeout(function () {
    //   nav.classList.remove("invisible");
    //   btn.classList.remove("invisible");
    // }, 750);


setTimeout(function () {
    logoHead.classList.remove("invisible");
  }, 400)

setTimeout(function () {
    logo.classList.remove("invisible");
    btn.classList.remove("invisible");
  }, 800)



function slideShow() {
  landingPics[landingCounter].classList.add("landingInvisible");
  landingCounter++;
  if (landingCounter == landingPics.length) {
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


// function modalToggle() {
//   var modal = document.getElementsByClassName("modalMenu")[0];
//   modal.classList.toggle("hidden");
//   modal.classList.toggle("invisible");
// }
}

function modalShow() {
  let menuBtn = document.getElementsByClassName("menuIcon")[0];
  let menuExit = document.getElementsByClassName("menuExit")[0];
  let modal = document.getElementsByClassName("modalMenu")[0];
  let body = document.getElementsByTagName("body")[0];
  modalCheck = modal.classList.contains("invisible");
  function modalTimeout() {
     modal.classList.toggle("invisible");
     body.style.overflowY = "";
}
  if (modalCheck == false) {
    modal.classList.toggle("hidden");
    setTimeout(modalTimeout, 200);
    menuBtn.style.opacity = "1";
    menuExit.style.opacity = "0";
  } else {
  modal.classList.toggle("invisible");
  modal.classList.toggle("hidden");
  body.style.overflowY = "hidden";
  menuBtn.style.opacity = "0";
  menuExit.style.opacity = "1";
}
}

var scroll = new SmoothScroll('a[href*="#"]');
console.log(scroll);
