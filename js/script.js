const openMenu = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector("aside");

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
    $("aside .sub-menu").slideUp(300);
  }
});

const goTop = document.querySelector("#top");

goTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

$(".has-sub").on("click", () => {
  const sub = $(".sub-menu");
  if(sub.css("display") =="block"){
    sub.slideUp(300)
  }else{
    sub.slideDown(300)
  }
});
