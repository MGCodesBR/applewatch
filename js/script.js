// header code
const $menuBtn = document.querySelector(".menu-button");
const $mainNav = document.querySelector(".main-nav");
const $bag = document.querySelector(".bag");

function clickMenuButton() {
   if ($menuBtn.classList.contains("-active")) {
      $menuBtn.classList.remove("-active")
      $mainNav.classList.remove("-active")
      $bag.classList.remove("-hidden")
   } else {
      $menuBtn.classList.add("-active")
      $mainNav.classList.add("-active")
      $bag.classList.add("-hidden")
   }
}

$menuBtn.addEventListener("click", clickMenuButton)