function updateTime() {
    const timeButton = document.getElementById('time-button');
    timeButton.textContent = new Date().toLocaleTimeString();
}

function email() {
    window.location.href = "mailto:theunium@skiff.com";
}

document.getElementById("current_year").innerHTML = new Date().getFullYear();
setInterval(updateTime, 1000);
updateTime();

// from : https://znci.dev/js/index.js
const isMobile = window.matchMedia("(max-width: 862px)").matches;
const acknowledgedMobileAlert =
    localStorage.getItem("acknowledgedMobileAlert") || false;

if (isMobile && !acknowledgedMobileAlert) {
    alert(
        "👋🏼 Hey! It looks like you're using a mobile device. Just so you know, the website might not look quite right on mobile devices and we're actively looking for ways to improve your experience. (Not using a mobile device? Please let us know via the contact form below!)\n\n(thanks znci.dev)"
    );

    localStorage.setItem("acknowledgedMobileAlert", true);
}
