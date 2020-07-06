function switchSheet() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/themes/light-mode.css") {
        theme.href = "css/themes/dark-mode.css";
    } else {
        theme.href = "css/themes/light-mode.css";
    }
}