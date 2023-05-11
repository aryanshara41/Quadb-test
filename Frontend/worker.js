
async function fetchData() {
    var response = await fetch("http://127.0.0.1:4000/");
    var data = await response.json();
    console.log(data);
}

fetchData();

const circularProgress = document.querySelectorAll(".circular-progress");

setInterval( ()=>{
    window.location.reload();
}, 60000)

Array.from(circularProgress).forEach((progressBar) => {
    const progressValue = progressBar.querySelector(".percentage");
    const innerCircle = progressBar.querySelector(".inner-circle");
    let startValue = 0,
        endValue = 60,
        speed = 1000,
        progressColor = "#3DC6C1"
    const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}`;
        progressValue.style.color = `${progressColor}`;

        innerCircle.style.backgroundColor = "#191D28"

        progressBar.style.background = `conic-gradient(${progressColor} ${ startValue * 6
            }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        if (startValue === endValue) {
            clearInterval(progress);
        }
    }, speed);
});


function showDropDown(e) {
    if (e == null) return;

    let id = e.target.id + "-dropdown";
    let ele = document.getElementById(id);
    if (ele.hidden) ele.hidden = false;
    else ele.hidden = true;

    console.log(ele.hidden);
}

function closeDropDown() {
    document.getElementById("price-dropdown").hidden = true;

}


function changeBackground() {
    console.log("Yes");
    var ele = document.getElementById("root");
    if (ele.style.backgroundColor == "white") {
        ele.style.backgroundColor = "#191D28";
        // changing to black
        document.getElementById("table").style.fontSize = "24px";
        document.getElementById("mid-value").style.color = "white";
        document.getElementById("tbody").style.backgroundColor = "#2E3241";
        document.getElementById("tbody").style.color = "#fff";
        document.getElementById("price").style.backgroundColor = "#2E3241";
        document.getElementById("currency").style.backgroundColor = "#2E3241";
        document.getElementById("buy").style.backgroundColor = "#2E3241";
        document.getElementById("price").style.color = "white";
        document.getElementById("currency").style.color = "white";
        document.getElementById("buy").style.color = "white";

        var ele = document.getElementsByClassName("table-image");
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.height = "1.5rem";
            ele[i].style.width = "1.5rem";
            ele[i].style.borderRadius = "12px";
        }

    }
    else {
        ele.style.backgroundColor = "white";
        document.getElementById("table").style.fontSize = "16px";
        document.getElementById("mid-value").style.color = "#0C0F48";
        document.getElementById("tbody").style.backgroundColor = "#F8F9FA";
        document.getElementById("tbody").style.color = "black";
        document.getElementById("price").style.backgroundColor = "#fff";
        document.getElementById("currency").style.backgroundColor = "#fff";
        document.getElementById("buy").style.backgroundColor = "#fff";
        document.getElementById("price").style.color = "black";
        document.getElementById("currency").style.color = "black";
        document.getElementById("buy").style.color = "black";

        var ele = document.getElementsByClassName("table-image");
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.height = "1rem";
            ele[i].style.width = "1rem";
            ele[i].style.borderRadius = "12px";
        }
    }
}