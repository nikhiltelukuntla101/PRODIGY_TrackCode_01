window.addEventListener("scroll", function () {
  const navMenu = document.getElementById("navMenu");
  if (window.scrollY > 50) {
    navMenu.classList.add("scrolled");
  } else {
    navMenu.classList.remove("scrolled");
  }
});
