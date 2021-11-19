let darkModeBtn = document.getElementById("DarkModeBtn");
//
let isDarkMode = false;
//
function darkMode() {
    if (isDarkMode === false) {
        document.body.style.background = "#BCBCBC";
        isDarkMode = true;
    } else if (isDarkMode === true) {
        document.body.style.background = "#1C1C1C"
        isDarkMode = false;
    }
}
