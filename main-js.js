window.onload = function () {
  const selectElement = (s) => document.querySelector(s);
  setTimeout(() => {
    selectElement("body").setAttribute("style", "overflow:auto;");
  }, 2600);
  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 2500);

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
};


