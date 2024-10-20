const reBtn = document.querySelector('#re');

reBtn.addEventListener('click', () => {
    window.location.href = '/';
})

function updateVal(e){
    const vv = e.parentElement.textContent.split(" ")[1];

    e.value = JSON.parse(localStorage.getItem('num'))[vv];
}

function btnDel(e) {
    const presents = localStorage.getItem("presents")? localStorage.getItem("presents").split(","): undefined;
    const index = [...e.parentElement.parentElement.children].indexOf(e.parentElement);
    console.log(index);
    presents.splice(index, 1);
    localStorage.setItem("presents", presents);
    const elel = JSON.parse(localStorage.getItem('num'));
    delete elel[e.parentElement.textContent.split(" ")[1]];
    localStorage.setItem("num", JSON.stringify(elel));
    e.parentElement.remove();
}

function setNum(e) {

    if (event.key === "Enter") {
        numbers = localStorage.getItem("num");
        elel = e.parentElement.textContent.split(" ")[1];
        console.log(elel);
        if (numbers) {
            numbers = JSON.parse(numbers);
            numbers[elel] = e.value;
            // Enter 키가 눌렸을 때 수행할 작업
            localStorage.setItem("num", JSON.stringify(numbers));
        } else {

            localStorage.setItem("num", JSON.stringify({[elel]: e.value}));
        }

    }
}

function addel(name) {
    const giftList = document.getElementById("gift-list");
    const newGift = document.createElement("p");
    newGift.innerHTML = `🎁 ${name} <button style="background-color: #300;
            color: #ff0000;
            border: 2px solid #ff0000;
            cursor: pointer;
            border-radius: 0.25rem;
            transition: all 0.3s ease;" id="kkkk" onclick="
            btnDel(this);
            ">삭제</button> <input type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');" style="background-color: #300;
            color: #ff0000;
            border: 2px solid #ff0000;
            cursor: pointer;
            border-radius: 0.25rem;
            width: 10vw" id="kkkk" onkeydown="setNum(this)">`;
    const vv = newGift.textContent.split(" ")[1];
    const nunu = localStorage.getItem('num');

    if(nunu) {
        const ss = JSON.parse(nunu);
        if(ss[vv]) {
            newGift.lastElementChild.value = JSON.parse(nunu)[vv];
        } else {
            newGift.lastElementChild.value = 1;
            ss[vv] = 1;
            localStorage.setItem('num', JSON.stringify(ss));
        }

    } else {
        newGift.lastElementChild.value = 1;
        localStorage.setItem('num', JSON.stringify({[vv]:1}));
    }

    giftList.appendChild(newGift);
    document.getElementById("gift-input").value = '';  // Clear input
}

// Open the popup
function openPopup() {
    const giftList = document.getElementById("gift-list");
    const presents = localStorage.getItem("presents")? localStorage.getItem("presents").split(","): undefined;
    giftList.innerHTML = ``;

    if(presents) {
        for (const val of presents) {
            addel(val);
        }
    }

    document.getElementById("popup").classList.add("active");
}

// Close the popup
function closePopup() {
    document.getElementById("popup").classList.remove("active");
}

// Add gift to the list
function addGift() {
    const presents = localStorage.getItem("presents")? localStorage.getItem("presents").split(","): undefined;

    const giftName = document.getElementById("gift-input").value;
    if (giftName.trim() && giftName.length > 0) {
        addel(giftName);
        if(presents) {
            presents.push(giftName);
            localStorage.setItem("presents", presents);
        } else {
            localStorage.setItem("presents", [giftName]);
        }
    }

}


