const openMenu = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector("aside");
const downArrow = document.querySelectorAll(".fa-angle-down");
openMenu.addEventListener("click", () => {
  if (menu) {
    menu.style.right = 0;
  }
});
closeMenu.addEventListener("click", () => {
  if (menu) {
    menu.style.right = "-100%";
    $(".sub-menu").slideUp(300);
  }
});

var prevWidth = window.innerWidth;
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width !== prevWidth) {
    prevWidth = width;
    menu.style.right = "-100%";
    $(".sub-menu").slideUp(300);
    downArrow[0].style.transform = "rotate(0)";
    downArrow[1].style.transform = "rotate(0)";
  }
});

const goTop = document.querySelector("#top");

goTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

$(".has-sub").on("click", () => {
  const sub = $(".sub-menu");
  if (sub.css("display") == "block") {
    downArrow[0].style.transform = "rotate(0)";
    downArrow[1].style.transform = "rotate(0)";
    sub.slideUp(300);
  } else {
    sub.slideDown(300);
    downArrow[0].style.transform = "rotate(180deg)";
    downArrow[1].style.transform = "rotate(180deg)";
  }
});
