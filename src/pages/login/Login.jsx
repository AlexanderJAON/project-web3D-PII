import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useEffect } from "react";

export default function Login(){
    const {user, loginGoogleWithPopUp, logout, observeAuthState}= useAuthStore();
    const handleLogin=useCallback(()=>{
        loginGoogleWithPopUp();
    },[loginGoogleWithPopUp])
    useEffect(()=>{
        observeAuthState();
        console.log(user)
    }, [observeAuthState,user])
    return (
        <>
        <div className="container-login">
            <button onClick={handleLogin}>Login</button>
        </div>
        </>
    )
}