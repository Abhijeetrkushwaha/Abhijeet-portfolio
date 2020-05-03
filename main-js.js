const selectElement = (s) => document.querySelector(s);
setTimeout(() => {
  selectElement("body").setAttribute("style", "overflow:auto;");
}, 2600);
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 2500);

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
  selectElement(".open").addEventListener("click", () => {
    selectElement(".nav-list").classList.add("active");
  });
  selectElement(".close").addEventListener("click", () => {
    selectElement(".nav-list").classList.remove("active");
  });
  let scroll = document.querySelectorAll(".scroll-trigger");
  for (var i = 0; i < scroll.length; i++) {
    scroll[i].addEventListener("click", () => {
      selectElement(".nav-list").classList.remove("active");
    });
  }
  let a = $(window);
  a.on("scroll", function () {
    var menu_area = $(".color");
    if (a.scrollTop() > 200) {
      menu_area.addClass("color1");
    } else {
      menu_area.removeClass("color1");
    }
  });
  $("#Menu").onePageNav({
    currentClass: "highlight",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });
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
