const loginForm = document.querySelector("#login-form-html");
//const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//const loginButton = document.querySelector("#login-form button"); Css style searching for item

function displayGreeting(username){
    greeting.innerText = `Hello ${username}`; // ~ button. (Backtick) Same thing as "Hello " + userName;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername != null){ // call from localStorage
    displayGreeting(savedUsername);
}else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function onLoginSubmit(event){
    event.preventDefault(); //prevents the default behavior of refreshing the browser.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    let username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    displayGreeting(username);
    /*
    const userName = loginInput.value;
    if (userName == "") {
        alert("Please enter your name");
    }else if (userName.length > 15) {
        alert("Name too long");
    }else{
        console.log("Welcome ", userName);
    }*/
    // you can specify all this within html form. And don't need eventListener either.
    // BUT form will refresh the whole website.
}
//loginButton.addEventListener("click", onLoginBtnClick);

