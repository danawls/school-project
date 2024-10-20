const inputs = document.querySelectorAll(".keke");


const [cltBtn, re, ne] = document.querySelectorAll(".button");


let isPutted = false;

let inPass = [];

cltBtn.addEventListener("click", (e) => {
    inPass = [];

    for (const val of inputs) {
        if (val.value && !isNaN(val.value)) {
            inPass.push(val.value);
        } else {
            console.log(val);
            window.confirm("Input all password. Password must be numbers");
            inPass = [];
            return;
        }
    }
    console.log(inPass);
    isPutted = true;
})

ne.addEventListener("click", (e) => {
    if (isPutted) {
        let isRight = true;
        const password = localStorage.getItem("password").split(",");
        console.log(password);
        for (let i = 0; i < inPass.length; i++) {
            if (inPass[i] === password[i]) {
                console.log("good!");
            } else {
                console.log("no....");
                isRight = false;
            }
        }

        if(isRight) {
            window.location.href = "/result?right=good";
        } else {
            window.location.href = "/result?right=bad";
        }

    } else {
        window.confirm("Complete entering.");
    }
})