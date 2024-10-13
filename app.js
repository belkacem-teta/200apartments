function toggleMenu() {
  let menu = document.getElementById("menu");

  menu.style.display = (menu.style.display === "none") ? "block" : "none";
}

document.addEventListener(
    "click", 
    function(event) {
      let menu = document.getElementById("menu");
      let button = document.getElementById("menu-btn");

      if (menu.style.display === "block" && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
      }
    }
);