import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"


//trae los datos del formulario reg.form //

const formularioRegistro = document.querySelector("#registro-form")

formularioRegistro.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = formularioRegistro["registroEmail"].value;
    const password = formularioRegistro["registroPassword"].value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);

        // cerrar modal de registro //

        //creamos constante para seleccionar el modal de registro//
        const registroModal = document.querySelector("#registroModal");

        //creamos constante para obtener la instancia del registro//
        const modal = bootstrap.Modal.getInstance(registroModal);
        // la cerramos // 
        modal.hide();

        showMessage("Bienvenido" + userCredential.user.email)

    } catch (error) {

        //cuando envia un error con estos veo el codigo del error y puedo enviar algo//

        //console.log(error.message);
        //console.log(error.code);

        // manejo de errores // 
        if (error.code === "auth/email-already-in-use") {
            showMessage("Correo Ya Registrado", "error");
        } else if (error.code === "auth/invalid-email") {
            showMessage("Correo Invalido", "error")
        } else if (error.code === "auth/weak-password") {
            showMessage("Contraseña debe Tener 6 Caracteres", "error")
        } else if (error.code) {
            showMessage("Error Desconocido", "error")
        }


    };

});
