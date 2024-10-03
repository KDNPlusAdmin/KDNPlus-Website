document.getElementById("login-btn").addEventListener("click", () => {
    const usernameEmail = document.getElementById("username-email").value;
    const password = document.getElementById("login-password").value;

    if (usernameEmail && password) {
        window.location.href = "../countdown/countdown.html";
        
    }
});
