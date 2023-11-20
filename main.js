//toggle theme

document.querySelector("#toggle-theme").addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
});

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
  document.documentElement.classList.add("light-theme");
}

//arrow scroll down
document.querySelector("#scroll-down").addEventListener("click", () => {
  window.scrollTo({
      top: document.querySelector("#about-me").offsetTop - 20,
  });
});