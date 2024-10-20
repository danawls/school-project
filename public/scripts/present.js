const giftPaper = document.getElementById("gift-paper");

let isDid = false;

const ne = document.querySelector("#next");

let presents = localStorage.getItem("presents") ? localStorage.getItem("presents").split(","): ["선물을 입력하세요."];

const presentId = Math.floor(Math.random() * presents.length);

function drawGift(){
    if(!isDid) {

        giftPaper.textContent = presents[presentId];

        giftPaper.style.display = "block"; // Reveal the paper
        isDid = true;
    }

}

ne.addEventListener("click", () => {
    window.location.href = "/bye";
});