const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const weather = document.querySelector("#weather");
const mainScreen = document.querySelector("#mainScreen");
const HIDDEN_CLASSNAME = "hidden";
const VISIBLE_CLASSNAME = "visible";
const LOAD_CLASSNAME = "load";
const USERNAME_KEY = "username";

function displayMainScreen(username){
    greeting.innerText = `${timelyGreeting}, ${username}`; // ~ button. (Backtick) Same thing as "Hello " + userName;
    mainScreen.classList.remove(HIDDEN_CLASSNAME);
    mainScreen.classList.add(VISIBLE_CLASSNAME);
    getWeatherInfo();
}

function updateGreeting(greeting){
    if (savedUsername != null){
        greeting.innerText = `${greeting}, ${savedUsername}`;
    }
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername != null){ // call from localStorage
    displayMainScreen(savedUsername);
    greeting.addEventListener("mouseenter", handleMouseOnName);
}else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function handleMouseOnName(){
    console.log("event working");
}

function onLoginSubmit(event){
    event.preventDefault(); //prevents the default behavior of refreshing the browser.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    let username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    displayMainScreen(username);
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

