// selectElement function
const selectElement = (s) => document.querySelector(s);
// the loader will disappear after 2.5sec 
setTimeout(() => {
  selectElement("body").setAttribute("style", "overflow:auto;");
}, 2500);
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 2500);
// on window load this function will execute
window.onload = function () {

  registerSw();
  async function registerSw() {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("./sw.js");
      } catch (error) {
        console.log("Service Worker not found");
      }
    }
  }
  // nav-List navigation
  selectElement(".open").addEventListener("click", () => {
    selectElement(".nav-list").classList.add("active");
  });
  selectElement(".close").addEventListener("click", () => {
    selectElement(".nav-list").classList.remove("active");
  });
  // remove active class from nav-list on selecting the nav-items.
  let scroll = document.querySelectorAll(".scroll-trigger");
  for (var i = 0; i < scroll.length; i++) {
    scroll[i].addEventListener("click", () => {
      selectElement(".nav-list").classList.remove("active");
    });
  }
  // adding color1 when scrolling lenght will be more than 200px.
  let a = $(window);
  a.on("scroll", function () {
    var menu_area = $(".color");
    if (a.scrollTop() > 200) {
      menu_area.addClass("color1");
    } else {
      menu_area.removeClass("color1");
    }
  });
  // highlight class will added depending on the sections.
  $("#Menu").onePageNav({
    currentClass: "highlight",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });
  // scroll reveal
  window.sr = ScrollReveal();
  sr.reveal(".about-info", {
    origin: "bottom",
    duration: 1000,
    distance: "5rem",
    delay: 600,
  });
  window.sr = ScrollReveal();
  sr.reveal(".about-content", {
    origin: "bottom",
    duration: 1000,
    distance: "5rem",
    delay: 600,
  });
  window.sr = ScrollReveal();
  sr.reveal(".method-item", {
    origin: "bottom",
    duration: 1000,
    distance: "5rem",
    delay: 600,
  });
  window.sr = ScrollReveal();
  sr.reveal(".top", {
    origin: "bottom",
    duration: 500,
    distance: "5rem",
    delay: 600,
  });
};
