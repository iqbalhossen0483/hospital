import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import Initialization from "../Firebase/Initialization";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoad, setIsLoad] = useState(true);
    Initialization();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //sign in / up with google
    const signInWithGoogle = () => {
        setIsLoad(true);
        return signInWithPopup(auth, googleProvider)
    }

    //sign up with email
    const signUpWithEmail = (email, password) => {
        setIsLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //user name and extra information
    const updatUser = name => {
        updateProfile(auth.currentUser, { name })
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    };

    //log in with email
    const logInWithEmail = (e, email, password) => {
        setIsLoad(true);
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
    }

    //user observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoad(true)
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoad(false)
        })
    }, [auth]);

    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        user,
        signInWithGoogle,
        signUpWithEmail,
        logInWithEmail,
        isLoad,
        updatUser,
        setIsLoad,
        logOut
    }
}

export default useFirebase;