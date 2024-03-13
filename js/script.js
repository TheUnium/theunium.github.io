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

dragElement(document.getElementById("win1"));
dragElement(document.getElementById("win2"));
dragElement(document.getElementById("win3"));
dragElement(document.getElementById("win4"));
function dragElement(e){var n=0,t=0,o=0,l=0;function u(u){(u=u||window.event).preventDefault(),n=o-u.clientX,t=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function f(){document.onmouseup=null,document.onmousemove=null}e.onmousedown=function e(n){(n=n||window.event).preventDefault(),o=n.clientX,l=n.clientY,document.onmouseup=f,document.onmousemove=u}}

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
