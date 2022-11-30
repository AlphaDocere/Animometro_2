import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase";
import { showMessage } from "./showMessage.js"




const googleButton = document.querySelector("#googleReg");

googleButton.addEventListener("click", async () => {

    const provider = new GoogleAuthProvider()

    try {

        const credential = await signInWithPopup(auth, provider)
        console.log(credential);

        //creamos constante para seleccionar el modal de registro//
        const logueoGoogle = document.querySelector("#ingresarModal");

        //creamos constante para obtener la instancia del registro//
        const modal = bootstrap.Modal.getInstance(logueoGoogle);
        // la cerramos // 
        modal.hide();

        showMessage("Bienvenido   " + credential.user.displayName)

    } catch (error) {


        console.log(error);


    }

})

