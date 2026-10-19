const themeButton = document.getElementById("theme-switcher");
const bodyElement = document.body;

function toggleTheme() {
    bodyElement.classList.toggle("dark-theme");

    if (bodyElement.classList.contains("dark-theme")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
}

themeButton.addEventListener("click", toggleTheme);