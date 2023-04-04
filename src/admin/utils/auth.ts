import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuthProvider } from "../firebase";


export const firebaseSignInWithEmailAndPassword = async(email: string, password: string) => {
    try {
        const user = await signInWithEmailAndPassword(firebaseAuthProvider, email, password)
        console.log(user)
    } catch(error) {
        switch(error) {
            case "auth/user-not-found": 
                console.log("USER NOT FOUND")
                break
            default:
                console.log(error)
        }
    }
}

onAuthStateChanged(firebaseAuthProvider, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });


