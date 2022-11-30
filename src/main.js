import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "../app/firebase.js";
import { loginCheck } from "../app/loginCheck.js"


import "../app/formularioRegistro.js";
import "../app/Deslogueo.js"
import "../app/logueo.js"
import "../app/GoogleLogeo.js"

onAuthStateChanged(auth, async (user) => {

    loginCheck(user)

});