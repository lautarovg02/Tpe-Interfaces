"use strict";

// let search = document.getElementById("search");
// search.addEventListener("keyup", (e) => {});

// Elementos del DOM
let formLogin = document.getElementById("form-login");
let formRegister = document.getElementById("form-register");
let loginContainer = document.getElementById("login-container");
let logoutContainer = document.getElementById("logout-container");
let loginForm = document.getElementById("login-form");
let loginOn;
let userName = "";

let btnSendComent = document.getElementById("send-coment");
if(btnSendComent != null){
    btnSendComent.addEventListener("click", (e) => {
        console.log("hola")
        addComent(e)});
}

let btnLogin = document.getElementById("btn-login")

if(btnLogin != null){
    btnLogin.addEventListener("click", (e) => {
        login(e);        
    });
}

const btnRegisterForm = document.getElementById("btn-form-register")

if(btnRegisterForm != null){
    btnRegisterForm.addEventListener("click", (e) => {
        registerUser(e);
    });
}


//* Elements of register form
let usernameRegister = document.getElementById("username-register");
let emailRegister = document.getElementById("email-register");
let passwordRegister = document.getElementById("password-register");
let confirmPasswordRegister = document.getElementById("confirm-register");
let flag = false;

let currentUser = "";

//* Elements of login form    
let emailLoggin = document.getElementById("email-login");
let passwordLoggin = document.getElementById("password-login");


const loggedInUser = document.getElementById("logged-in-user");
const logoutButton = document.getElementById("logout-button");

const msgPassword = document.getElementById("msg-password");

// Arreglo para almacenar usuarios registrados
const registeredUsers = [
    {'username': "lautaro02",
     'password': "lautaro",
     'rol': "user",
     'email': "lautaro@gmail.com"
    },
    {'username': "agus",
     'password': "agus",
     'rol': "admin",
     'email': "agus@gmail.com"
    },
];

const comentsOfUsers = [
    {
        'username': "agus",
        'comment': "Me encanto esta noticia"},
];

function addComent(e) {
    e.preventDefault();
    console.log("entre");
    let sectionComents = document.querySelector(".coments");
    let coment =document.getElementById("comment-input").value;
    if(coment != ""){
        sectionComents.innerHTML += ` 
        <div class="card">
            <p>Usuario: <span id="font-play">Lautaro</span></p>
            <div class="card-body">
               ${coment}
            </div>
        </div>`;
    } 

}


function registerUser(event) {
    event.preventDefault(); // Evitar el envío del formulario
    let divAlert = document.getElementById("div-alert");
    divAlert.classList.add("disguise");
    
    if (usernameRegister.value != "" && emailRegister.value != "" && 
    passwordRegister.value != "" && confirmPasswordRegister.value != "") {
        comparePasswords(event);
        if(flag){// si las contrasenas son iguales
            const username = usernameRegister.value;
            const email = emailRegister.value;
            const password = passwordRegister.value;
            
            let newUser = {
                'username': username,
                'password': password,
                'rol': "user",
                'email': email,
            };
    
    
            const usuarioExistente = registeredUsers.find(
                (usuario) => usuario.username === username
            );
            
            if (usuarioExistente) {
                divAlert.textContent = "El usuario ya existe. Por favor, elige otro nombre de usuario.";
                return;
            }else{
                registeredUsers.push(newUser);
                window.location.href = "/app/showUsuario.html";
            }
    
            
        }
        else{
            divAlert.classList.remove("disguise");
            divAlert.textContent = "Verifique que las contrasenas coincidan";
        }
    }else{
        divAlert.classList.remove("disguise");
        divAlert.textContent = "Complete todos los campos";
    }
        // Limpiar los campos de entrada
        usernameRegister.value = "";
        emailRegister.value = "";
        passwordRegister.value = "";
        confirmPasswordRegister.value = "";
}

function comparePasswords(event) {
    event.preventDefault(); 
    
    const password1 = passwordRegister.value;
    const password2 = confirmPasswordRegister.value;


    if (password1 === password2) {
        flag = true;
        msgPassword.textContent = "Las contraseñas coinciden.";
    } else {
        flag = false;
        msgPassword.textContent = "Las contraseñas no coinciden.";
    }
}

function login(event) {
    event.preventDefault(); 
    let divAlert = document.getElementById("div-alert-loggin");
    divAlert.classList.add("disguise");

    if(emailLoggin.value != "" || passwordLoggin != ""){
        const email = emailLoggin.value;
        const password = passwordLoggin.value;
        const usuario = registeredUsers.find(
            (usuario) => usuario.email === email && usuario.password === password
        );
        if (usuario.rol === "admin") {            
            currentUser = usuario.username;
            window.location.href = "/app/showAdmin.html";
        } else {
            window.location.href = "/app/showUser.html";
            divAlert.classList.remove("disguise");
            divAlert.textContent = "Usuario o contraseña incorrectos. Por favor, intenta nuevamente.";
        }
    }else{
        divAlert.classList.remove("disguise");
        divAlert.textContent = "Complete todos los campos";
    }
    emailLoggin.value = "";
    passwordLoggin.value = "";
}