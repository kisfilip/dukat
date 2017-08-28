// trigger on scroll event
window.onscroll = function () {
  // get scrollbar position
  var doc = document.documentElement, body = document.body;
  var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

  // get menu
  var menu = document.getElementsByClassName("sectionPic1")[0];
  var Onama = document.getElementsByClassName("sectionOnama")[0];
  var sectionJelovnik = document.getElementsByClassName("sectionJelovnik")[0];
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
  var sectionJelovnik = document.getElementsByClassName("sectionJelovnik")[0];
  var jelovnikWrap = document.getElementsByClassName("jelovnikWrap")[0];
  var podnaslov = document.getElementsByClassName("side")[0];
  var line = document.getElementsByClassName("line")[0];
  var line2 = document.getElementsByClassName("line")[1];
  var offsetNaslova = (top - sectionJelovnik.offsetTop)/16;
  var jelovnikScroll = top - sectionJelovnik.offsetTop;
  if (jelovnikScroll > line.offsetTop && jelovnikScroll < line2.offsetTop) {
    console.log("true");
    console.log(podnaslov.style.top);
    console.log(line.offsetTop);
    podnaslov.style.top = (jelovnikScroll)/16 + 8 + "rem";
  } else if (jelovnikScroll < line.offsetTop){
       console.log("false");
       podnaslov.style.top = line.offsetTop/16 + "rem";
     };
};
