// [START auth_anon_sign_in_modular]
import { getAuth, signInAnonymously } from "firebase/auth";
import { app } from "./firebase";

export const auth = getAuth(app);
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
// [END auth_anon_sign_in_modular]