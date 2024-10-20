const btn = document.querySelector('.start-button');

const handleStart = () => {
    localStorage.removeItem("password");
    window.location.href = "/setting-password";
}

btn.addEventListener('click', handleStart);