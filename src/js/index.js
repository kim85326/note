const app = document.getElementById("app");
const theme = document.getElementById("theme");
const lightThemeButton = theme.querySelector(".view-mode[data-mode=light]");
const darkThemeButton = theme.querySelector(".view-mode[data-mode=dark]");

theme.addEventListener("click", function(event) {
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
