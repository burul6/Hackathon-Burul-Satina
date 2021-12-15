import React, { useContext } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './LoginPage.css';
import { googleContext } from '../..';
// import { googleContext } from '../../fire';

const LoginPage = () => {
    const {auth, provider} = useContext(googleContext);
    const login = () => {
        signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      }
    return (
        <div style={{textAlign:"center"}}>
            <div className='register' style={{width:"400px", textAlign:"center", marginLeft:"400px"}}>
                <div style={{fontSize:"45px", fontWeight:"600", marginBottom:"25px"}}>ACCOUNT</div>
                <div style={{width:"100%"}}>
                <input style={{border:"1px solid rgba(209,209,209,0.7)", 
                   height:"44px", width:"100%", marginBottom:"15px", padding:"0 20px"}} 
                   type="text" 
                   autoFocus
                   required
                   placeholder='Your email'/>
                </div>
                <div style={{width:"100%"}}>
                <input  style={{border:"1px solid rgba(209,209,209,0.7)", 
                   height:"44px", width:"100%", padding:"0 20px", marginBottom:"15px"}} 
                   type="text" 
                   autoFocus
                    required
                   placeholder='Enter password' required/>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div>Have an account?</div>
                </div>
                <div>
                    <button className='register-btn'> Sign in</button>
                </div>
                    <div style={{marginBottom:"30px", fontSize:"16px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>Sign in us</div>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"30px"}}>
                    <button className='register-facebook'>FACEBOOK</button>
                    <button className='register-google'  onClick={()=> login()}>GOOGLE+</button>
                    <button className='register-twitter'>TWITTER</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;