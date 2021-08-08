
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "123") {
        window.location.assign("dashboard.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

// function formToJson() {
//     var object = {};
//     formData.forEach(function(value, key){
//         object[key] = value;
//     });
//     var json = JSON.stringify(object);
//
// }