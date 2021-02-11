import React,{useContext,useState,useEffect} from 'react'
import {auth} from '../../firebase'

const AuthContext= React.createContext()

//this function will allow use if the context
export function useAuth()
{
    return useContext(AuthContext)
}

//The AuthProvider encloses the App component and all the children inside it is destructured and passed as a component
export const AuthProvider= ({children}) => {


    //creating a current user state to check and currentUser
    //currentUser stores the details of the current logged in user
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)


    //this function takes the email and password for registration which gets passed to the firebase api
    const signup=(email,password)=>{
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login=(email,password)=>{
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout=()=>{
       return auth.signOut()
    }

    const forgotPassword=(email)=>{
        return auth.sendPasswordResetEmail(email)
    }


    // a hook is introduced so that to check on change in the state of the authentication api of firebase 
    useEffect(()=>{
        
        //onAuthStateChanged returns a promise of the currently logged in user
       const unsubscribe = auth.onAuthStateChanged(user=>{  
        setCurrentUser(user)
        setLoading(false)
        })
        //unsubscribes from the onAuthStateChanged listener
        return unsubscribe
    },[])

    
    //the value object contains the currentUser state variable along with the signup function to be passed as a parameter to child components
    const value={
        currentUser,
        signup,
        login,
        logout,
        forgotPassword
    }
    return (
        //here the Auth Provider returns the children  along with the the context-> AuthContext with  a prop value declared above.
        <AuthContext.Provider value={value}>
          {!loading && children}  
        </AuthContext.Provider>
    )
}
