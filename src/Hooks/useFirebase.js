import  { useEffect, useState } from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile,GoogleAuthProvider,getAuth ,signInWithPopup,signOut,onAuthStateChanged, } from "firebase/auth";
import firebaseInitialize from '../Pages/Login/Firebase/firebase.init';


firebaseInitialize();

const useFirebase = () => {
   


    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                // saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                setUser(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser= (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn=(location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }
    const logout=()=>{
        signOut(auth).then(() => {

          }).catch((error) => {

        });
    }
    useEffect(()=>{
        const unsubscribed =onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
          });
          return () => unsubscribed;   
    },[auth])


    return {
        user,
        googleSignIn,
        logout,
        error,
        isLoading,
        loginUser,
        registerUser,
       
        
    }
};

export default useFirebase;