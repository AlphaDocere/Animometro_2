import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "../app/firebase.js";
import { showMessage } from "./showMessage.js"

const formularioLogueo = document.querySelector("#login-form");

formularioLogueo.addEventListener("submit", async e => {
    e.preventDefault();

    const email = formularioLogueo["login-email"].value;
    const password = formularioLogueo["login-password"].value;


    try {

        const credenciales = await signInWithEmailAndPassword(auth, email, password);
        console.log(credenciales);


        //creamos constante para seleccionar el modal de registro//
        const logueoModal = document.querySelector("#ingresarModal");

        //creamos constante para obtener la instancia del registro//
        const modal = bootstrap.Modal.getInstance(logueoModal);
        // la cerramos // 
        modal.hide();

        showMessage("Bienvenido   " + credenciales.user.email)





    } catch (error) {
        if (error.code === "auth/wrong-password") {
            showMessage("Contraseña Incorrecta", "error");

        } else if (error.code === "auth/user-not-found") {
            showMessage("Usuario No encontrado", "error");

        } else {
            showMessage(error.message, "error");
        }

    }

});