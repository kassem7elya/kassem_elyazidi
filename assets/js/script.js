// start hamburger 
const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_nav.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobile_nav.classList.remove("active");
  })
);
// end hamburger 