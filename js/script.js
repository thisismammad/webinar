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
  }
});


const goTop = document.querySelector("#top")

goTop.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo(0, 0);
})