"use strict";

var app = document.getElementById("app");
var theme = document.getElementById("theme");
var lightThemeButton = theme.querySelector(".view-mode[data-mode=light]");
var darkThemeButton = theme.querySelector(".view-mode[data-mode=dark]");
theme.addEventListener("click", function (event) {
  if (!event.target.classList.contains("view-mode")) {
    return;
  }

  if (event.target.dataset.mode === "dark") {
    lightThemeButton.classList.remove("active");
    darkThemeButton.classList.add("active");
    app.classList.add("dark");
  } else {
    lightThemeButton.classList.add("active");
    darkThemeButton.classList.remove("active");
    app.classList.remove("dark");
  }
});
//# sourceMappingURL=index.js.map
