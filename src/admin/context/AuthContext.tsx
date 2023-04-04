import { User as FirebaseUser } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from 'react';
import { firebaseAuthProvider } from "../firebase";
import { firebaseSignInWithEmailAndPassword } from "../utils/auth";


interface IAuthContext {
    currentUser: FirebaseUser | null | undefined, 
    getUser: () => FirebaseUser | null,
    login: (email: string, password: string) => void,
    signOut: () => any,
}
const AuthContext = createContext<IAuthContext | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: {children: JSX.Element | string}) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>()

  const login = (email: string, password: string) => {
    firebaseSignInWithEmailAndPassword(email, password)
  }

  const signOut = async() => {
    firebaseAuthProvider.signOut();
  }

  function getUser() {
    return firebaseAuthProvider.currentUser
  }

  useEffect(() => {
    const unsubscribe = firebaseAuthProvider.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value: IAuthContext = {
    currentUser, 
    getUser,
    login,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}