let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(() => {
    let currentTime = new Date();

    hrs.innerText = (currentTime.getHours() < 10 ? "0":"") + currentTime.getHours();
    min.innerText = (currentTime.getMinutes() < 10 ? "0":"") + currentTime.getMinutes();
    sec.innerText = (currentTime.getSeconds() < 10 ? "0":"") + currentTime.getSeconds();
},1000);
