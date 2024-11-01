function scrollPopup() {
    var experienceSection = document.getElementById("experience");
    var popup = document.createElement("div");
    popup.textContent = "Check out my experience!";
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.backgroundColor = "#0c0aa2";
    popup.style.color = "#ffffff";
    popup.style.padding = "10px 15px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
    popup.style.zIndex = "1000";
    popup.style.display = "none";
    document.body.appendChild(popup);
    window.addEventListener("scroll", function () {
        var sectionTop = experienceSection.getBoundingClientRect().top;
        var sectionVisible = sectionTop < window.innerHeight && sectionTop > 0;
        if (sectionVisible) {
            popup.style.display = "block";
        }
        else {
            popup.style.display = "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    scrollPopup();
});
