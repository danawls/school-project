const chars = document.querySelectorAll(".char");

results = localStorage.getItem('results').split(",");

console.log(results);

for (let i = 0 ; i < chars.length; i++) {
    if (results[i] === "true") {
        chars[i].classList.remove("hidden-char");
        chars[i].classList.add("revealed-char");
        chars[i].textContent = localStorage.getItem("password").split(",")[i];
    }
}

const next = document.querySelector(".next");
const url = window.location;
const id = url.toString().split("/")[3].split("?")[1].split("=")[1];
console.log(id);

next.addEventListener("click", () => {
    if (id === "1"){
        window.location.href = "/second-game";
    } else if (id === "2"){
        window.location.href = "/third-game";
    } else if (id === "3") {
        window.location.href = "/fourth-game";
    } else if (id === "4") {
        window.location.href = "/solve-password";
    } else {
        window.location.href = "/nomunomu";
    }
})