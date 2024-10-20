const giftPaper = document.getElementById("gift-paper");

let isDid = false;

const ne = document.querySelector("#next");

let presents = localStorage.getItem("presents") ? localStorage.getItem("presents").split(","): ["선물을 입력하세요."];


if (presents[0] !== "선물을 입력하세요.") {
    if(presents.length < 2) {
        presents = [presents[0].split('"')[1]];
        console.log(presents);
    }
}

const presentId = Math.floor(Math.random() * presents.length);

function drawGift(){
    if(!isDid) {
        console.log(presentId);
        giftPaper.textContent = presents[presentId]; // Replace with actual gift name logic
        const vv = localStorage.getItem("num");
        if(vv) {
            const ss = JSON.parse(vv);
            console.log(ss);
            ss[presents[presentId]] = Number(ss[presents[presentId]]) - 1;
            console.log(ss[presents[presentId]]);
            if(Number(ss[presents[presentId]]) < 1) {
                delete ss[presents[presentId]];
                console.log(presents);
                presents.splice(presents.indexOf(presents[presentId]), 1);
                localStorage.setItem('num', JSON.stringify(ss));
                if (presents.length < 1) {
                    localStorage.removeItem('num');
                    localStorage.removeItem('presents');
                } else {
                    localStorage.setItem("presents", JSON.stringify(presents));
                }

            } else {
                localStorage.setItem("num", JSON.stringify(ss));
            }

        }
        giftPaper.style.display = "block"; // Reveal the paper
        isDid = true;
    }

}

ne.addEventListener("click", () => {
    window.location.href = "/bye";
});

