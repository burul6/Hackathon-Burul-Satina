// import { createContext, useState, useContext, useEffect } from "react";
// import fire from "../fire";

// export const authContext = createContext();

// export const useAuth = () => {
//     return useContext(authContext)
// }

// const AuthContextProvider = ({children}) => {
//     const [user, setUser] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [emailError, setEmailError] = useState("")
//     const [passwordError, setPasswordError] = useState("")
//     const [hasAccount, setHasAccount] = useState("");




//     const handleLogOut =()=>{
//         fire.auth().signOut();
//     };

//     const authListener=()=>{
//         fire.auth().onAuthStateChanged((user) => {
//             if(user){
//                 clearInputs()
//                 setUser(user)
//             }else{
//                 setUser('')
//             }
//         })
//     }

//     useEffect(() => {
//         authListener()
//     }, [])



//     const values={
//         email, 
//         user, 
//         handleLogOut, 
//         handleLogIn, 
//         setEmail, 
//         password, 
//         setPassword, 
//         handleSignUp, 
//         emailError, 
//         passwordError, 
//         setHasAccount, 
//         hasAccount,
//     }

//     return <authContext.Provider value={values}>
//         {children}
//     </authContext.Provider>

// }; 

// export default AuthContextProvider; 