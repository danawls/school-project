thisTimer = [1, 30];

let isSuccess = false;

const next = document.querySelector("#next");

next.addEventListener("click", (e) => {
    window.location.href = "/show-password?id=2";
});

const successBtn = document.querySelector('.button-container .button');

const timerH1 = document.querySelector('.timer');

function startTimer(minutes, seconds) {
    // 타이머 시작 시간 (초 단위로 변환)
    let totalSeconds = minutes * 60 + seconds;
    let remainingTime = totalSeconds;

    // 남은 시간을 기록할 변수
    let timeRemaining = {
        minutes: Math.floor(remainingTime / 60),
        seconds: remainingTime % 60
    };

    console.log(`Timer started: ${timeRemaining.minutes}m ${timeRemaining.seconds}s`);

    // 타이머 함수
    const intervalId = setInterval(() => {
        // 남은 시간 갱신
        remainingTime--;

        // 남은 시간을 분과 초로 변환
        timeRemaining.minutes = Math.floor(remainingTime / 60);
        timeRemaining.seconds = remainingTime % 60;

        timerH1.textContent = `${timeRemaining.minutes}:${timeRemaining.seconds}`;

        // 시간이 0이 되면 타이머 종료
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            successBtn.classList.add('hidden');
            console.log("Timer finished!");
        }

    }, 1000); // 1초마다 실행


}

timerH1.textContent = `${thisTimer[0]}:${thisTimer[1]}`;

// startTimer(thisTimer[0], thisTimer[1]);
startTimer(thisTimer[0], thisTimer[1]);

successBtn.addEventListener('click', (e) => {
    isSuccess = true;
    e.target.classList.add('hidden');
})

const item = localStorage.getItem("results").split(",");
console.log(item);

next.addEventListener("click", (e) => {
    localStorage.setItem('results', [item[0], isSuccess, false, false]);
    window.location.href = "/show-password?id=2";
})