// Simulating success or failure scenario for demo
// Update the message and class for different outcomes

function displayResult(isSuccess) {
    const messageElement = document.getElementById("result-message");
    const descriptionElement = document.getElementById("result-description");

    if (isSuccess) {
        messageElement.textContent = "맞추셨습니다!";
        messageElement.className = "success";
        descriptionElement.textContent = "정답을 맞추셨습니다! 축하합니다!";
    } else {
        messageElement.textContent = "틀리셨습니다!";
        messageElement.className = "failure";
        descriptionElement.textContent = "아쉽게도 틀리셨습니다. 다시 시도해보세요!";
    }
}

const success = window.location.toString().split("/")[3].split("?")[1].split("=")[1] === "good" ? true : false;

// For demo purposes, you can call this function with true/false for success/failure
// Example: displayResult(false); to show failure result
displayResult(success); // Change to false for failure result

const ne = document.querySelector("#next");

ne.addEventListener("click", () => {
    if (success) {
        window.location.href = "/present";
    } else {
        window.location.href = "/bye";
    }

})