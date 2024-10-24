[settingBtn, autoSetBtn, directSetBtn, restartBtn, nextBtn] = document.querySelectorAll('button');

const password = [];

let isPassword = false;

const handleAutoSetBtn = (e) => {
    while (password.length > 0) {
    password.pop();
}
    for (let i = 0; i < 4; i++) {
        password.push(Math.floor(Math.random() * 10));
    }

    localStorage.setItem("password", password);

    window.alert(`Password changed successfully! Now password is ${password}`);

    isPassword = true;
}

const handleDirectSetBtn = (e) => {
    okay = false;
    const regex = /^[0-9]*$/;

    while (!okay) {
        protoPassword = undefined;
        protoPassword = window.prompt("Enter 4-digits Password");

        if (!protoPassword || protoPassword.length > 4 || !regex.test(protoPassword)) {
            window.alert('Password must be 4 characters, only numbers');
        } else {
            okay = true;
        }
    }

    while (password.length > 0) {
        password.pop();
    }

    for (const val of protoPassword) {
        password.push(val);
    }

    localStorage.setItem("password", password);

    window.alert(`Password changed successfully! Now password is ${password}`);

    isPassword = true;
}

const handleNext = () => {
    if (!localStorage.getItem("password")) {
        window.alert("You must set password before go next step first.");
    } else {
        window.location.href = "/first-game"
    }
}

autoSetBtn.addEventListener('click', handleAutoSetBtn);
directSetBtn.addEventListener('click', handleDirectSetBtn);
restartBtn.addEventListener('click', () => {window.location.href = "/";});
nextBtn.addEventListener('click', handleNext);