document.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById("map");

  if (map) {
    map.style.height = `${map.offsetWidth}px`;

    window.addEventListener("resize", () => {
      map.style.height = `${map.offsetWidth}px`;
    });
  }
});
