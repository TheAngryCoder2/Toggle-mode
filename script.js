document.addEventListener("DOMContentLoaded", function() {
    const inputEl = document.querySelector(".input");
    const bodyEl = document.querySelector("body");

    // Load the theme state from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        inputEl.checked = savedTheme === "dark";
    } else {
        inputEl.checked = false;
    }

    function updateBody() {
        if (inputEl.checked) {
            bodyEl.style.background = "black";
            localStorage.setItem("theme", "dark");
        } else {
            bodyEl.style.background = "white";
            localStorage.setItem("theme", "light");
        }
    }

    // Attach event listener to the checkbox
    inputEl.addEventListener("change", updateBody);

    // Initial call to update the body background based on the checkbox state
    updateBody();
});
