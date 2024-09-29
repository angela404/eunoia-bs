document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById("loader");
        loader.style.opacity = 0;

        setTimeout(function() {
            loader.style.display = "none";
        }, 5000);

        var content = document.getElementById("main-content");
        setTimeout(function() {
            content.style.opacity = 1;
            content.style.display = "block";
        }, 300);
    }, 4750);
});