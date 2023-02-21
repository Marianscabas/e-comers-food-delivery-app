import {useEffect , useState} from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {getDatabase} from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwVgiod3ML6Jve5K8Ilj7SVwHPAtCYrWM",
  authDomain: "e-comers-food-delibery-app.firebaseapp.com",
  projectId: "e-comers-food-delibery-app",
  storageBucket: "e-comers-food-delibery-app.appspot.com",
  messagingSenderId: "1084690079813",
  appId: "1:1084690079813:web:b7acba9f415226014ac32c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app);


export const googleProvider = new GoogleAuthProvider();

export const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result) {
      // Verificar si el usuario tiene una dirección de correo electrónico verificada
      const user = result.user;  

      if (user.emailVerified) {
        window.location.assign("/Home");       
      } else {
        throw new Error(
          "Tu correo electrónico no ha sido verificado. Por favor verifica tu correo electrónico y vuelve a intentarlo."
        );
      }
    }
  } catch (error) {
    // Manejar errores específicos de autenticación de Google
    if (error.code === "auth/account-exists-with-different-credential") {
      throw new Error(
        "Este correo electrónico ya ha sido registrado con otro proveedor. Por favor inicie sesión con su proveedor anterior."
      );
    }
  }
};

